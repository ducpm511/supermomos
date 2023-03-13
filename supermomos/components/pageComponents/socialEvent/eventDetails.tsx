import { EventType } from "@/components/types/pages/socialEventPage";
import { useEffect, useState } from "react";
import styles from "../../../styles/socialEvent.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface IEventDetailsProp {
  eventData: EventType;
  setEventData(eventDate: EventType): any; 
}
const EventDetails: React.FC<IEventDetailsProp> = ({
  eventData,
  setEventData,
}) => {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [venue, setVenue] = useState<string>("");
  const [capacity, setCapacity] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const EventData = eventData;
  const today = new Date();

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case "title":
        EventData.title = value;
        break;
      case "venue":
        EventData.venue = value;
        break;
      case "capacity":
        EventData.capacity = Number(value);
        break;
      case "price":
        EventData.price = Number(value);
        break;

      default:
        break;
    }
    setEventData(EventData);
  }

  const handleDateTimePicker = (field: string, selectDateTime: Date) => {
    let selectedDate = '';
    let selectedTime = '';
    let formedDateTimeString = ''
    switch (field) {
      case "date":
        selectedDate = selectDateTime.toISOString().split("T")[0];
        selectedTime = time.toISOString().split("T")[1];
        formedDateTimeString = selectedDate + "T" + selectedTime;
        console.log("date");
        console.log(formedDateTimeString);
        break;
      case "time":
        selectedDate = date.toISOString().split("T")[0];
        selectedTime = selectDateTime.toISOString().split("T")[1];
        formedDateTimeString = selectedDate + "T" + selectedTime;

        console.log("date");
        console.log(formedDateTimeString);
        break;
      default:
        break;
    }
    EventData.startAt = formedDateTimeString;
    setEventData(EventData);
  }

//   useEffect(()=>{
//     console.log(EventData);
//   })
  return (
    <>
      <div className="col-5">
        <div className={`${styles.titleInput} mb-5 mt-4`}>
          <input
            type="text"
            placeholder="Untitle Event"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
              handleInputChange("title", e.target.value);
            }}
          />
        </div>

        <div className={`d-flex`}>
          <div className={`d-flex ${styles.dateTimeInput}`}>
            <img src="/calender_icon.png" alt="" />
            <DatePicker
              selected={date}
              onChange={(date: Date) => {
                setDate(date);
                handleDateTimePicker('date', date);
              }}
              dateFormat="yyyy-MM-dd"
              minDate={today}
            />
          </div>
          <div className={`d-flex ${styles.dateTimeInput}`}>
            <img src="/clock.png" alt="" />
            <DatePicker
              selected={time}
              onChange={(date: Date) => {
                setTime(date);
                handleDateTimePicker('time', date);
              }}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </div>
        </div>
        <div className={`d-flex ${styles.venueInput} mt-5`}>
          <img src="/location_icon.png" alt="" />
          <input
            type="text"
            placeholder="Venue"
            value={venue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setVenue(e.target.value || "");
              handleInputChange("venue", e.target.value);
            }}
          />
        </div>

        <div className={`d-flex mt-3`}>
          <div className={`d-flex ${styles.capacityAndCostInput}`}>
            <img src="/people_icon.png" alt="" />
            <input
              type="text"
              placeholder="Max capacity"
              value={capacity}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCapacity(e.target.value || "");
                handleInputChange("capacity", e.target.value);
              }}
            />
          </div>
          <div className={`d-flex ${styles.capacityAndCostInput}`}>
            <img src="/dollar_icon.png" alt="" />
            <input
              type="text"
              placeholder="Cost per person"
              value={price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPrice(e.target.value || "");
                handleInputChange("price", e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default EventDetails;
