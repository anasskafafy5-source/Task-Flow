import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DueDatePicker.css";

export default function DueDatePicker({ value, onChange }) {
  return (
    <div className="due-date-field">
      <label className="due-date-label">Due Date</label>

      <div className="date-wrapper">
        <FaRegCalendarAlt className="calendar-icon" />

        <DatePicker
          selected={value}
          onChange={(date) => onChange(date)}
          minDate={new Date()}
          dateFormat="dd MMM yyyy"
          placeholderText="Select due date"
          className="due-date-input"
        />
      </div>
    </div>
  );
}