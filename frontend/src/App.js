import React from 'react'
import AudioRecorder from './components/AudioRecorder'
import { Container } from '@mui/material'

const App = () => {
  return (
    <Container maxWidth="xl">
      <AudioRecorder />
    </Container>
  )
}

export default App