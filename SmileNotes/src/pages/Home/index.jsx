import React, { useState, useEffect } from 'react';
import { yellow } from '@mui/material/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

import { Container, User, Tarefas, DivButton } from './style';
import { Header } from '../../components/Header';

export function Home(props) {
    const { users } = props.location.state;
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefaTexto, setNovaTarefaTexto] = useState('');
  const [user, setUser] = useState(null);

  const adicionarTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      label: novaTarefaTexto,
      checked: false
    };

    const updatedTarefas = [...tarefas, novaTarefa];
    setTarefas(updatedTarefas);
    setNovaTarefaTexto('');
    localStorage.setItem('tarefas', JSON.stringify(updatedTarefas));
  };

  const handleCheckboxChange = (tarefaId) => {
    const updatedTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === tarefaId) {
        return { ...tarefa, checked: !tarefa.checked };
      }
      return tarefa;
    });

    setTarefas(updatedTarefas);
    localStorage.setItem('tarefas', JSON.stringify(updatedTarefas));
  };

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');

    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${users.username}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));
  }, [username]);

  return (
    <Container>
      <Header />
      {user && (
        <User>
          <img src={user.avatar_url} alt="User Avatar" />
          <h1>{user.name}</h1>
        </User>
      )}
      <h2>Tarefas</h2>
      <Tarefas>
        {tarefas.length === 0 ? (
          <p>Adicione uma tarefa</p>
        ) : (
          <FormGroup>
            {tarefas.map((tarefa) => (
              <FormControlLabel
                key={tarefa.id}
                control={
                  <Checkbox
                    checked={tarefa.checked}
                    onChange={() => handleCheckboxChange(tarefa.id)}
                    sx={{
                      color: yellow[800],
                      '&.Mui-checked': { color: yellow[600] }
                    }}
                  />
                }
                label={tarefa.label}
              />
            ))}
          </FormGroup>
        )}
      </Tarefas>
      <TextField
        label="Nova Tarefa"
        value={novaTarefaTexto}
        onChange={(e) => setNovaTarefaTexto(e.target.value)}
        sx={{
          backgroundColor: '#F5F5F5',
          borderRadius: '13px',
          marginTop: '10px',
          '& .MuiInputBase-input': {
            color: 'black',
          },
          '& .MuiInputLabel-root': {
            color: 'black',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'orange',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'orange',
            },
          },
        }}
      />
      <DivButton onClick={adicionarTarefa}>Adicionar</DivButton>
    </Container>
  );
}
