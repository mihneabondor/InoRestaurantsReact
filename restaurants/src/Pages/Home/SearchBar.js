import Form from 'react-bootstrap/Form';

function SearchBar() {
    const search = (event) => {
        const text = event.currentTarget;
        console.log(text);
    };

    return (
        <Form>
            <Form.Group className="Search-Container" controlId="exampleForm.ControlInput1" onSubmit={search}>
                <Form.Control placeholder="Search restaurants, chefs, dishes..." />
            </Form.Group>
        </Form>
    );
}

export default SearchBar;