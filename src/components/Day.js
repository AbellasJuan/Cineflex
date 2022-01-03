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
            <Link style={{
              'textDecoration': 'none',
          }}to={`/assentos/${seat.id}`}>
              <div className="time-rectangle" key={index}>
                <span>{seat.name}</span>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
};