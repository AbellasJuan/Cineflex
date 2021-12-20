import { Link } from "react-router-dom";

export default function Day({ day }) {
  return (
    <div className="single-day">
      <div className="title">
        {day.weekday} - {day.date}
      </div>

      <div className="showtime-list">
        {
          day.showtimes.map((seat, index) => (
            <Link to={`/assentos/${seat.id}`}>
              <div className="time-rectangle" key={index}>
                <p>{seat.name}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
};