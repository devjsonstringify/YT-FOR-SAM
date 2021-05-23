/* eslint-disable jsx-a11y/accessible-emoji */
import { useContext } from 'react'
import { Form, Field } from 'react-final-form'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grow from '@material-ui/core/Grow'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import HomeContext from 'views/HomeView/HomeContext'

const StyledContainer = styled(Container)`
  display: flex;
`
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const onSubmit = async (values) => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const FinalForm = () => {
  const { isFormVisible } = useContext(HomeContext)
  return (
    <Grow in={isFormVisible}>
      <StyledContainer maxWidth="md">
        <Box margin="5rem auto" height="100%">
          <Paper>
            <Box padding="5rem" boxSizing="border-box">
              <Box marginBottom="2rem">
                <Typography variant="h4">
                  Find Youtube videos by channel name
                </Typography>
              </Box>
              <Form
                onSubmit={onSubmit}
                render={({
                  handleSubmit,
                  form,
                  submitting,
                  pristine,
                  values,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box
                      display="grid"
                      gridTemplateColumns="1fr 1fr"
                      gridTemplateRows="1fr"
                      gap="1rem 1rem"
                      margin="2rem auto"
                    >
                      <Box display="flex">
                        <Box>
                          <Typography>Hi, my name is</Typography>
                        </Box>
                        <Field name="name">
                          {(props) => (
                            <Box margin="0 1rem" flexGrow="3">
                              <TextField
                                fullWidth
                                name={props.input.name}
                                value={props.input.value}
                                onChange={props.input.onChange}
                              />
                            </Box>
                          )}
                        </Field>
                      </Box>
                      <Box display="flex">
                        <Box>
                          <Typography>and I'm looking for</Typography>
                        </Box>
                        <Field name="youtubeUser">
                          {(props) => (
                            <Box margin="0 1rem" flexGrow="3">
                              <TextField
                                fullWidth
                                name={props.input.name}
                                value={props.input.value}
                                onChange={props.input.onChange}
                              />
                            </Box>
                          )}
                        </Field>
                      </Box>
                    </Box>

                    <Box>
                      <Button
                        type="submit"
                        disabled={submitting || pristine}
                        color="secondary"
                        variant="contained"
                      >
                        Find now
                      </Button>
                    </Box>
                  </form>
                )}
              />
            </Box>
          </Paper>
        </Box>
      </StyledContainer>
    </Grow>
  )
}

export default FinalForm
