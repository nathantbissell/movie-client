import React from 'react'
import Form from '../components/Form.js'
import Input from '../components/Input.js'

import { deleteMovie } from '../bin/api.js'

const MovieDelete = props => {

  return (
    <div>
      <Form legendText="Delete a Movie"
            buttonText="Delete Movie"
            setFeedback={ props.setFeedback }
            feedbackSuccess="deleted movie"
            feedbackFailure="failed to delete movie"
            request={ deleteMovie }>

               <Input name="id"
                      type="text"
                      required/>

        </Form>
    </div>
  )
}

export default MovieDelete
