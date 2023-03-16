import { Button, Form, Input } from './SearchForm.styled';

export const SearchForm = ({ query, handleChange }) => {
  const changeInput = e => {
    let { value } = e.target;
    handleChange(value.toLowerCase().trim());
  };

  const formSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={formSubmit}>
      <Input
        type="text"
        name="query"
        value={query}
        onChange={changeInput}
        placeholder="Filter by name..."
      />

      <Button type="submit" aria-label="Search button"></Button>
    </Form>
  );
};
