const CalendarAppointments = () => {
  const appointments = [
    { id: 1, image: '/Avatar.png', name: 'Esther Howard', role: 'Poly dental', time: '09:40 AM' },
    { id: 2, image: '/Avatar-1.png', name: 'Arlene McCoy', role: 'Psychiatrist', time: '09:40 AM' },
    { id: 3, image: '/Avatar-2.png', name: 'Guy Hawkins', role: 'Internist', time: '09:40 AM' },
    {
      id: 4, image: '/Avatar-3.png',
      name: 'Courtney Henry',
      role: 'Ophthalmologist',
      time: '09:40 AM',
    },
    { id: 5, image: '/Avatar-4.png', name: 'Annette Black', role: 'Neurologist', time: '09:40 AM' },
  ]

  return (
    <div className='lg:absolute right-0 h-auto lg:max-w-sm w-[95%] bg-white rounded-2xl lg:mt-[333px] lg:-mr-12 border p-6'>
      {/* Calendar Header */}
      <div className='flex justify-between items-center mb-4'>
        <button className='p-2 bg-gray-100 rounded-full hover:bg-gray-200'>
          <span className='material-symbols-outlined'>chevron_left</span>
        </button>
        <h2 className='text-xl font-semibold text-gray-800'>February 2024</h2>
        <button className='p-2 bg-gray-100 rounded-full hover:bg-gray-200'>
          <span className='material-symbols-outlined'>chevron_right</span>
        </button>
      </div>

      {/* Days Header */}
      <div className='grid grid-cols-7 text-center text-gray-600 font-medium mb-2'>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      {/* Calendar Grid */}
      <div className='grid grid-cols-7 text-center gap-2 mb-6 place-items-center'>
        {/* Days from previous month */}
        <div className='text-gray-400'>30</div>
        <div className='text-gray-400'>31</div>

        {/* Current month days */}
        {Array.from({ length: 29 }, (_, i) => (
          <div
            key={i}
            className={`rounded-full w-full p-2 ${i + 1 === 8 ? 'bg-[#30374F] text-white' : ''
              }`}
          >
            {i + 1}
          </div>
        ))}

        {/* Next month days */}
        <div className='text-gray-400'>1</div>
        <div className='text-gray-400'>2</div>
        <div className='text-gray-400'>3</div>
        <div className='text-gray-400'>4</div>
      </div>

      {/* Appointment Section */}
      <div>
        <h3 className='text-lg font-semibold text-gray-800 mb-4 flex items-center'>
          <span className='material-symbols-outlined mr-2' style={{ color: '#2E90FA' }}>
            event
          </span>
          Appointment
        </h3>
        <ul>
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className='flex justify-between items-center mb-3 p-3'
            >
              <div className='flex items-center'>
                <div className='w-12 h-12 rounded-full flex items-center justify-center mr-3'>
                  <img src={appointment.image} alt="image" />
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-800'>
                    {appointment.name}
                  </h4>
                  <p className='text-sm text-gray-500'>{appointment.role}</p>
                </div>
              </div>
              <div className='text-right'>
                <p className='text-sm text-gray-500'>Today</p>
                <p className='text-sm font-semibold text-gray-800'>
                  {appointment.time}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CalendarAppointments
