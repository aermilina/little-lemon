import { fireEvent,render, screen } from "@testing-library/react";
import {Bookings} from './Bookings';

describe('Booking form',() => {
    const availableTimes=['20:00','22:00'];
    const dispatch= jest.fn();
    const handleSubmit = jest.fn();

    test('Renders the BookingForm', () => {
        render(<Bookings availableTimes={availableTimes} dispatch={dispatch}/>);

        const heading= screen.getByText("Book a table");
        const dateInput = screen.getByLabelText("Choose date");
        const timeSelect = screen.getByLabelText("Choose time");
       

        expect(heading).toBeInTheDocument();

        expect(dateInput).toBeInTheDocument();
        expect(dateInput).toHaveAttribute("type","date");

        expect(timeSelect).toBeInTheDocument();
        expect(timeSelect).toHaveAttribute("id","time");
        
    });
    test('Update Time', () => {
        render(
            <Bookings availableTimes={availableTimes} dispatch={dispatch}/>
        );


        const BookForm= screen.getByRole("form").onsubmit=handleSubmit;
        const submitButton = screen.getByTitle("Make you reservation");
        fireEvent.click(submitButton);
        expect(handleSubmit).toHaveBeenCalled();
        
        

  });
  test('Errors', () => {
    render(
        <Bookings availableTimes={availableTimes} dispatch={dispatch}/>
    );


    const numberofGuest = screen.getByLabelText("Number of guests")
    fireEvent.change(numberOfGuests, { target: { value: 0 } });
    const errorMessage = screen.getByTestId('error');
    
    expect(errorMessage).toBeInTheDocument();

});
});

    


