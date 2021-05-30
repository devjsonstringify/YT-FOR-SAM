/* eslint-disable jsx-a11y/accessible-emoji */
import { useContext, useState, useEffect } from 'react'
import { Form, Field } from 'react-final-form'
import MuiAlert from '@material-ui/lab/Alert'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grow from '@material-ui/core/Grow'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Snackbar from '@material-ui/core/Snackbar'
import styled from 'styled-components'
import HomeContext from 'views/HomeView/HomeContext'
import useLocalStorage from 'hooks/useLocalStorage'
import { v4 as uuidv4 } from 'uuid'
import GetLocalStorageByItem from 'utils/getLocalStorageItem'

const StyledContainer = styled(Container)`
  display: flex;
`
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const FinalForm = () => {
  const id = uuidv4()
  const { isFormVisible, onHandleClickToggleForm, setNodes } =
    useContext(HomeContext)
  const [pageState, setPageState] = useState({
    loading: 'idle',
    error: false,
    notify: false,
  })

  const onHandleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') return
    setPageState((prev) => ({ ...prev, notify: !prev.notify }))
  }

  const onSubmit = async (values) => {
    try {
      const saveNewItem = { id, ...values }
      setPageState((prev) => ({
        ...prev,
        loading: 'loading',
      }))
      await sleep(1000)
      setNodes((prev) => [...prev, saveNewItem])
      setPageState((prev) => ({ ...prev, loading: 'idle', notify: true }))
    } catch (error) {
      setPageState((prev) => ({ ...prev, error, notify: true }))
    }
  }
  return (
    <Grow in={isFormVisible}>
      <StyledContainer maxWidth="md">
        <Box
          margin="5rem auto"
          height="100%"
          boxShadow="0px 9px 24px 0px rgba(0,41,158,0.3);"
        >
          <Paper>
            <Box padding="5rem 4rem" boxSizing="border-box">
              <Box marginBottom="2rem">
                <Typography variant="h4">
                  Please add your video information here
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
                  <form
                    onSubmit={(event) => {
                      const promise = handleSubmit(event)
                      promise &&
                        promise.then(() => {
                          form.reset()
                        })
                      return promise
                    }}
                  >
                    <Box
                      display="grid"
                      gridTemplateColumns="1fr"
                      gridTemplateRows="1fr 1fr 1fr"
                      gap="1rem 1rem"
                      margin="2rem auto"
                    >
                      <Box display="flex">
                        <Box>
                          <Typography>Hi, what's name of this video</Typography>
                        </Box>
                        <Field name="name">
                          {(props) => (
                            <Box margin="0 1rem" flexGrow="3">
                              <TextField
                                fullWidth
                                required
                                placeholder="#video"
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
                          <Typography>
                            Tell me something about this video
                          </Typography>
                        </Box>
                        <Field name="description">
                          {(props) => (
                            <Box margin="0 1rem" flexGrow="3">
                              <TextField
                                fullWidth
                                required
                                placeholder="I like this video ..."
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
                          <Typography>and what's the video link</Typography>
                        </Box>
                        <Field name="link">
                          {(props) => (
                            <Box margin="0 1rem" flexGrow="3">
                              <TextField
                                fullWidth
                                required
                                placeholder="https://"
                                name={props.input.name}
                                value={props.input.value}
                                onChange={props.input.onChange}
                              />
                            </Box>
                          )}
                        </Field>
                      </Box>
                    </Box>

                    <Box display="flex">
                      <Box margin="0 0.5rem">
                        <Button
                          color="secondary"
                          size="medium"
                          variant="contained"
                          onClick={onHandleClickToggleForm}
                        >
                          Cancel
                        </Button>
                      </Box>
                      <Box margin="0 0.5rem">
                        <Button
                          type="submit"
                          disabled={submitting || pristine}
                          color="secondary"
                          variant="contained"
                        >
                          {pageState.loading == 'loading'
                            ? 'loading..'
                            : 'save video'}
                        </Button>
                      </Box>
                    </Box>
                  </form>
                )}
              />
            </Box>
            <Snackbar
              open={pageState.notify}
              autoHideDuration={6000}
              onClose={onHandleCloseSnackBar}
            >
              <MuiAlert
                onClose={onHandleCloseSnackBar}
                severity={pageState.error ? 'error' : 'success'}
              >
                {pageState.error
                  ? `Something went wrong, couldn't save your item`
                  : 'Hooray, success'}
              </MuiAlert>
            </Snackbar>
          </Paper>
        </Box>
      </StyledContainer>
    </Grow>
  )
}

export default FinalForm
