import React from 'react';

import { Button, FormGroup, Input, Col, UncontrolledAlert } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import { FormFeedBack } from './Feedbaack.styled';

const onSubmit = (values) => {
  console.log(values);
};

const Feedback = () => (
  <Form
    onSubmit={onSubmit}
    validate={(values) => {
      const errors = {};
      if (!values.fname) {
        errors.fname = (
          <span>
            <UncontrolledAlert color="info">
              Please write Firs Name
            </UncontrolledAlert>
          </span>
        );
      }
      if (!values.lname) {
        errors.lname = (
          <span>
            <UncontrolledAlert color="info">
              Please write Last Name
            </UncontrolledAlert>
          </span>
        );
      }
      if (!values.textarea) {
        errors.textarea = (
          <span>
            <UncontrolledAlert color="info">
              Please write your feedback
            </UncontrolledAlert>
          </span>
        );
      }
      if (!values.select) {
        errors.select = (
          <span>
            <UncontrolledAlert color="info">Please choose!</UncontrolledAlert>
          </span>
        );
      }
      return errors;
    }}
    render={({ handleSubmit, valid }) => (
      <FormFeedBack onSubmit={handleSubmit}>
        <h2>Feedback</h2>
        <FormGroup row>
          <Field name="fname">
            {({ input, meta }) => (
              <div>
                <Col>
                  <Input
                    {...input}
                    type="text"
                    placeholder="First name"
                    invalid={meta.error && meta.touched}
                  />
                </Col>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </FormGroup>
        <FormGroup row>
          <Field name="lname">
            {({ input, meta }) => (
              <div>
                <Input
                  {...input}
                  type="text"
                  placeholder="Last Name"
                  invalid={meta.error && meta.touched}
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </FormGroup>
        <FormGroup row>
          <Field name="textarea">
            {({ input, meta }) => (
              <div>
                <Input
                  {...input}
                  type="textarea"
                  placeholder="Write peale your feedback about site"
                  invalid={meta.error && meta.touched}
                />
                <p>{meta.error && meta.touched && <span>{meta.error}</span>}</p>
              </div>
            )}
          </Field>
        </FormGroup>
        <FormGroup row>
          <Field name="select">
            {({ input, meta }) => (
              <div>
                <Input
                  {...input}
                  type="select"
                  placeholder=""
                  invalid={meta.error && meta.touched}
                >
                  <option>Your feedback</option>
                  <option>Nice</option>
                  <option>Good</option>
                  <option>Angry</option>
                  <option>Denger</option>
                  <option>Hazard</option>
                </Input>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </FormGroup>
        <Button type="submit" color="primary" disabled={!valid} size="lg">
          Submit
        </Button>
      </FormFeedBack>
    )}
  />
);

export default Feedback;
