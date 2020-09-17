// A single page app built with React and Tailwind CDN
// Note! the following JavaScript is pre-compiled from JSX using Babel[https://babeljs.io/repl/]

// Mock Data for events
const eventsData = [
  {
    id: 1,
    title: 'VanHack Leap',
    tag: '#leap',
    type: 'main-event',
    location: 'Vancouver, Canada',
    date: 'Sep 21 - 25, 2020',
    deadline: 'Sep 10, 2020',
    image:
      'https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    content:
      'VanHack Leap is an in-person event held across cities in Canada and Europe where companies looking to hire senior tech talent can meet 30-50 top developers!',
  },
  {
    id: 2,
    title: 'VanHackathon',
    tag: '#vanhackathon',
    type: 'main-event',
    location: 'Online',
    date: 'Oct 10 - 12, 2020',
    deadline: 'Sep 30, 2020',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    content:
      'The VanHackathon is a virtual hackathon where companies share challenges with a talent pool of developers & designers interested in relocating.',
  },
  {
    id: 3,
    title: 'Recruiting Mission',
    tag: '#recruiting',
    type: 'main-event',
    location: 'Berlin, Germany',
    date: 'Oct 15 - 20, 2020',
    deadline: 'Oct 10, 2020',
    image:
      'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nulla fugit ducimus error quia omnis unde doloremque ipsum quis possimus, perferendis aliquam odit nam similique recusandae dolorum ut minima magnam rerum eum necessitatibus, explicabo optio autem? Distinctio dicta odio, saepe sit, nesciunt maiores atque eius ab nam, aperiam magnam assumenda.',
  },
  {
    id: 4,
    title: 'Recife MeetUp',
    tag: '#meetup',
    location: 'Recife, Brazil',
    date: 'Sep 25, 2020',
    deadline: 'Sep 15, 2020',
    image:
      'https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    content:
      'VanHack is doing a Meetup in Recife this month. We are bringing an event for Tech Talents who want to relocate to Canada or Europe and don’t know how.',
  },
  {
    id: 5,
    title: 'Webinar: Remote Hiring',
    tag: '#webinar',
    location: 'Online',
    date: 'Oct 15 - 20, 2020',
    deadline: 'Oct 10, 2020',
    premium: true,
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nulla fugit ducimus error quia omnis unde doloremque ipsum quis possimus, perferendis aliquam odit nam similique recusandae dolorum ut minima magnam rerum eum necessitatibus, explicabo optio autem? Distinctio dicta odio, saepe sit, nesciunt maiores atque eius ab nam, aperiam magnam assumenda.',
  },
  {
    id: 6,
    title: 'Webinar: Ethical Hacking & Web Security',
    tag: '#webinar',
    location: 'Online',
    date: 'Nov 5 - 10, 2020',
    deadline: 'Oct 30, 2020',
    premium: true,
    image:
      'https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nulla fugit ducimus error quia omnis unde doloremque ipsum quis possimus, perferendis aliquam odit nam similique recusandae dolorum ut minima magnam rerum eum necessitatibus, explicabo optio autem? Distinctio dicta odio, saepe sit, nesciunt maiores atque eius ab nam, aperiam magnam assumenda.',
  },
  {
    id: 7,
    title: 'Webinar: Effective Coomunication',
    tag: '#webinar',
    location: 'Online',
    date: 'Nov 25, 2020',
    deadline: 'Nov 10, 2020',
    image:
      'https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nulla fugit ducimus error quia omnis unde doloremque ipsum quis possimus, perferendis aliquam odit nam similique recusandae dolorum ut minima magnam rerum eum necessitatibus, explicabo optio autem? Distinctio dicta odio, saepe sit, nesciunt maiores atque eius ab nam, aperiam magnam assumenda.',
  },
];

// React dependencies
const { useState, useEffect, useContext, createContext, Fragment } = React;
// Global context for switching pages and notifications
const PageContext = createContext();
const NotificationContext = createContext();
// App
const App = () => {
  const [currentPage, setCurrentPage] = useState('events');
  const [notifications, setNotifications] = useState([]);
  // Global function to handle event application
  const handleEventApplication = (id) => {
    const ev = eventsData.find((ev) => ev.id === id);
    ev.premium
      ? setNotifications([
          ...notifications,
          {
            type: 'warning',
            message: `Oops! that is a premium webinar`,
            premium: true,
          },
        ])
      : setNotifications([
          ...notifications,
          { type: 'success', message: `Successfully applied for ${ev.title}` },
        ]);
  };
  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      <NotificationContext.Provider
        value={{
          notifications,
          setNotifications,
          handleEventApplication,
        }}
      >
        <Navbar />
        <Notification />
        <div className="w-full m-auto lg:w-11/12 xl:w-4/5">
          {currentPage === 'events' ? (
            <EventsPage />
          ) : (
            <EventDetailsPage id={currentPage} />
          )}
        </div>
      </NotificationContext.Provider>
    </PageContext.Provider>
  );
};

// Pages
// Events page
const EventsPage = () => {
  return (
    <Fragment>
      <Hero
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
        title="VanHack Events"
        subtitle="Exciting events hosted by VanHack."
      />
      <section className="mb-10">
        <p className="text-2xl font-bold m-4 p-2 border-b-2 text-center">
          Upcoming Events
        </p>
        <MainEvents />
      </section>
      <section className="rounded gradient p-4 pb-10 mb-10">
        <p className="text-2xl text-gray-100 font-bold mb-6 text-center">
          MeetUps & Webinars
        </p>
        <Events />
      </section>
    </Fragment>
  );
};
// Event details page
const EventDetailsPage = ({ id }) => {
  const { handleEventApplication } = useContext(NotificationContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const ev = eventsData.find((ev) => ev.id === id);
  return (
    <Fragment>
      <Hero image={ev.image} title={ev.title} subtitle={ev.location} />
      <section className="grid md:grid-cols-4 gap-4 mb-10 p-2">
        <div className="rounded bg-white md:col-span-3 px-6 py-4">
          <div className="mb-2 space-x-1">
            <span className="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-100">
              {ev.tag}
            </span>
            {ev.premium && (
              <span className="inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-100">
                #premium
              </span>
            )}
          </div>
          <p className="text-lg text-gray-700">{ev.content}</p>
        </div>
        <div className="px-6 py-4 bg-white rounded md:col-span-1">
          <p className="text-gray-700 text-md font-semibold mb-1">
            <i className="far fa-calendar-alt pr-2" />
            {ev.date}
          </p>
          <p className="text-gray-500 text-sm mb-1">
            <i className="far fa-calendar-times pr-2" />
            Deadline : {ev.deadline}
          </p>
          <p className="text-gray-500 text-sm mb-3">
            <i className="fas fa-map-marker-alt pr-2" />
            {ev.location}
          </p>
          <button
            className="rounded gradient text-gray-100 font-semibold capitalize px-4 py-2"
            onClick={() => handleEventApplication(ev.id)}
          >
            Apply
          </button>
        </div>
      </section>
      <section className="mb-10">
        <p className="text-2xl font-bold m-4 p-2 border-b-2 text-center">
          Upcoming Events
        </p>
        <MainEvents />
      </section>
    </Fragment>
  );
};

//Components
const Navbar = () => {
  const { setCurrentPage, currentPage } = useContext(PageContext);
  return (
    <div className="gradient shadow-md sticky top-0 left-0 min-w-full z-50 flex justify-between items-center px-6 py-1">
      <a href="https://vanhack.com">
        <svg
          width="136"
          height="50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M118.968 21.889c.332.137.408.288.267.63a21.24 21.24 0 00-.65 1.822c-.102.331-.243.39-.565.266a6.255 6.255 0 00-2.624-.352c-1.436.07-2.361.919-2.586 2.327-.11.724-.103 1.46.018 2.182.177 1.14.855 1.773 2.048 1.974 1.139.165 2.3.119 3.422-.138.352-.071.453 0 .498.35.089.654.209 1.304.353 1.948.068.302.027.416-.298.497a12.683 12.683 0 01-5.95.035c-2.3-.535-3.582-2.053-3.846-4.43-.129-1.16-.166-2.32.166-3.47.663-2.394 2.728-4.02 5.338-4.2.365-.025.731 0 1.096 0l-.003-.013a7.49 7.49 0 013.316.572zm4.605-4.875c.392-.011.448.14.447.48-.014 2.614 0 5.226 0 7.839v.663c.545-.724.994-1.326 1.454-1.93.543-.725 1.085-1.45 1.627-2.177.102-.138.189-.29.403-.289h3.754l-2.265 2.848c-.609.762-1.211 1.531-1.824 2.283-.194.237-.244.401 0 .663.645.684 1.255 1.402 1.883 2.1.71.791 1.632 1.227 2.619 1.552v.522l-.012-.007c-.242.529-.244 1.105-.317 1.657-.051.39-.165.553-.608.528-1.99-.109-3.592-.863-4.751-2.523-.585-.838-1.244-1.625-1.963-2.56v.68c0 1.237-.012 2.473 0 3.71 0 .332-.087.463-.435.455a76.344 76.344 0 00-2.819 0c-.307 0-.425-.073-.425-.406.009-5.226.009-10.452 0-15.678 0-.332.093-.416.413-.41.941.02 1.884.027 2.819 0zm-60.228 4.568c1.658.398 2.44 1.45 2.487 3.168.015.592.01 1.184.005 1.776l-.005.89.002.008c0 .853.03 1.708-.012 2.561-.025.532.176.807.687.819.331 0 .401.144.38.444-.05.676-.077 1.355-.103 2.034 0 .178-.038.304-.252.31-1.118.037-2.236.052-3.267-.48a.958.958 0 01-.436-.36c-.213-.454-.425-.275-.709-.08a5.375 5.375 0 01-4.777.778c-1.431-.421-2.22-1.45-2.31-2.946-.104-1.745.498-2.853 1.914-3.48.925-.42 1.92-.531 2.915-.566.68-.025 1.36-.018 2.04 0 .272 0 .353-.088.364-.36.039-1.1-.301-1.512-1.41-1.678-1.339-.187-2.637.1-3.93.38-.356.077-.497.033-.575-.332a29.95 29.95 0 00-.522-1.912c-.07-.233-.017-.344.217-.429 2.38-.871 4.81-1.135 7.297-.545zm41.06-.065c1.765.352 2.634 1.407 2.678 3.211.022.854 0 1.707 0 2.56h.01v.01c0 .888.029 1.778-.01 2.663-.024.555.196.828.728.845.345 0 .38.139.354.448-.058.64-.065 1.286-.082 1.93 0 .27-.104.416-.398.423-.925.018-1.845 0-2.734-.301-.352-.116-.708-.285-.882-.617-.198-.376-.368-.227-.592-.068-1.471 1.037-3.078 1.337-4.81.829-1.457-.423-2.27-1.453-2.367-2.96-.12-1.71.544-2.872 1.976-3.493 1.01-.436 2.085-.526 3.169-.544.558-.01 1.116-.021 1.674 0 .331.017.401-.11.404-.418 0-1.114-.264-1.456-1.384-1.615-1.337-.19-2.635.101-3.927.378-.349.075-.498.043-.577-.331-.138-.627-.332-1.243-.508-1.861-.074-.254-.06-.386.24-.497a12.885 12.885 0 017.038-.592zm-61.931-3.46c.345 0 .479.112.573.428 1.146 3.813 2.3 7.624 3.461 11.432.065.216.138.427.247.761.355-.966.673-1.82.985-2.69 1.132-3.14 2.26-6.283 3.385-9.426.13-.361.288-.52.698-.497.922.034 1.847.03 2.77 0 .447-.014.52.08.35.507-1.347 3.393-2.672 6.793-4.004 10.196-.552 1.408-1.111 2.816-1.645 4.23-.14.37-.31.544-.746.531a73.016 73.016 0 00-3.765 0c-.406.008-.567-.134-.693-.507a3753.37 3753.37 0 00-4.933-14.414c-.05-.146-.124-.283-.187-.424v-.104c1.16-.004 2.336-.004 3.504-.024zm34.336 3.32c1.691.321 2.47 1.242 2.635 2.96.13 1.356.071 2.714.083 4.071.011 1.531-.01 3.065.011 4.596 0 .376-.08.527-.487.514a46.381 46.381 0 00-2.718 0c-.363.01-.473-.098-.471-.466.017-2.194 0-4.387.008-6.58.01-.366-.02-.732-.086-1.09-.133-.627-.421-.887-1.071-.935a6.348 6.348 0 00-2.615.38c-.378.132-.533.306-.528.74.027 2.472 0 4.944.022 7.417 0 .398-.088.55-.514.537-.905-.03-1.813-.02-2.718 0-.32 0-.456-.06-.456-.43.014-3.707.014-7.416 0-11.125 0-.33.11-.414.421-.409.906.017 1.813.03 2.718 0 .44-.016.597.116.546.55a.903.903 0 00.056.58l.01-.01c.396-.228.778-.459 1.16-.672a5.819 5.819 0 013.994-.628zm17.62-3.332c.284 0 .392.066.392.374-.009 4.894-.009 9.79 0 14.684 0 .347-.136.4-.431.396a83.62 83.62 0 00-2.877 0c-.383.01-.461-.14-.458-.497.015-1.794 0-3.588.015-5.383 0-.384-.091-.497-.497-.497-1.88.023-3.762.023-5.648 0-.372 0-.468.115-.465.474.017 1.778-.011 3.554.02 5.33.008.48-.144.585-.59.567-.87-.035-1.745-.04-2.615 0-.498.025-.57-.166-.564-.602.018-2.387.008-4.773.008-7.159l.018.027c0-2.404.01-4.805-.008-7.212 0-.396.111-.497.498-.497.94.028 1.882.023 2.819 0 .345 0 .442.1.44.44-.016 1.76.01 3.52-.02 5.279-.01.479.142.573.588.567a216.24 216.24 0 015.492 0c.403 0 .536-.093.53-.516-.026-1.76 0-3.519-.02-5.278 0-.396.107-.497.497-.497.958.028 1.917.018 2.875 0zm-32.4 10.572c-.88.053-1.778-.103-2.637.199-.59.207-.857.624-.791 1.188.053.46.446.783 1.041.843a5.281 5.281 0 001.705-.166c.909-.21.909-.209.907-1.117 0-.227-.002-.452 0-.67 0-.156-.038-.289-.225-.277zm40.034.011a4.18 4.18 0 00-1.327.148h-.001c-.612.202-.942.653-.88 1.194.059.498.487.829 1.133.877.647.048 1.276-.103 1.909-.219.463-.084.655-.253.633-.773-.049-1.248-.014-1.248-1.467-1.227zM2.716 17.945l4.597 8.997c.166-.569.312-1.02.444-1.473 1.379-4.676 2.754-9.35 4.125-14.022.104-.36.253-.447.611-.447 1.99.018 3.99.008 5.985.008h.471c-.356 1.215-.698 2.384-1.043 3.553-2.341 7.933-4.68 15.868-7.014 23.803-.125.426-.29.555-.732.547-1.68-.03-3.361-.02-5.043 0a.517.517 0 01-.56-.36A1721.687 1721.687 0 00.245 28.99a.768.768 0 01-.064-.537c.847-3.461 1.675-6.919 2.535-10.508z"
              fill="#fff"
            />
            <path
              d="M34.336 11.055c-.315 1.078-.625 2.154-.943 3.235a87316.51 87316.51 0 00-7.13 24.155c-.102.346-.238.462-.606.459-2.058-.02-4.116-.01-6.174-.01-.076 0-.154-.012-.283-.02.301-1.027.597-2.03.892-3.032.671-2.283 1.336-4.57 2.024-6.847.118-.388.05-.486-.353-.483-1.774.017-3.55 0-5.325 0-.621 0-.626 0-.462-.62.497-1.86 1.003-3.719 1.492-5.583.087-.331.23-.454.576-.449 1.884.03 3.767.025 5.651.065.413.008.562-.14.663-.515.972-3.355 1.964-6.704 2.949-10.054.06-.202.113-.358.396-.356 2.173.017 4.34.013 6.507.017.044.008.086.02.126.038z"
              fill="#fff"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <path
                fill="#fff"
                transform="translate(0 11)"
                d="M0 0h132v28H0z"
              />
            </clipPath>
          </defs>
        </svg>
      </a>
      <ul>
        <li
          className={`cursor-pointer inline text-gray-100 font-medium ${
            currentPage === 'events' ? 'border-b' : 'border-b-0'
          }`}
          onClick={() => setCurrentPage('events')}
        >
          Events
        </li>
      </ul>
    </div>
  );
};
const Hero = ({ image, title, subtitle }) => {
  return (
    <div className="min-w-full rounded-b overflow-hidden h-64 mb-4">
      <div
        className="bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-blue-900 bg-opacity-50 h-full w-full flex flex-col justify-center items-center p-6 text-center">
          <p className="text-2xl md:text-4xl font-bold text-white uppercase">
            {title}
          </p>
          <p className="text-xl font-semibold text-gray-300">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
const Notification = () => {
  const { notifications, setNotifications } = useContext(NotificationContext);
  // Auto remove notifications after 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (notifications.length) {
        const temp = notifications;
        temp.shift();
        setNotifications([...temp]);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [notifications]);

  return (
    <div className="fixed z-20">
      {notifications.map((notif, index) => {
        return (
          <div
            key={index}
            className={`${notif.type} text-gray-100 rounded shadow-md items-center p-2 m-4 flex`}
          >
            {notif.type === 'success' ? (
              <i className="fas fa-check-circle mr-2 text-xl" />
            ) : (
              <i className="fas fa-info-circle mr-2 text-xl" />
            )}
            <p>
              {notif.message}
              &nbsp;
              {notif.premium && (
                <button className="underline">Learn More</button>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};
// Renders main events in grid
const MainEvents = () => {
  const [state] = useState(eventsData.filter((ev) => ev.type === 'main-event'));
  const { setCurrentPage } = useContext(PageContext);
  const { handleEventApplication } = useContext(NotificationContext);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
      {state.map((ev, index) => {
        return (
          <div key={index} className="rounded overflow-hidden relative m-auto">
            <img className="w-full rounded h-48 object-cover" src={ev.image} />
            <div className="p-4 absolute top-0 left-0">
              <span className="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-100">
                {ev.tag}
              </span>
            </div>
            <div className="px-4 -mt-10 relative">
              <div className="px-6 py-4 mx-auto bg-white rounded">
                <p className="font-bold text-xl text-primary mb-2">
                  {ev.title}
                </p>
                <p className="text-gray-700 text-md font-semibold mb-1">
                  <i className="far fa-calendar-alt pr-2" />
                  {ev.date}
                </p>
                <p className="text-gray-500 text-sm mb-1">
                  <i className="far fa-calendar-times pr-2" />
                  Deadline : {ev.deadline}
                </p>
                <p className="text-gray-500 text-sm mb-3">
                  <i className="fas fa-map-marker-alt pr-2" />
                  {ev.location}
                </p>
                <div className="space-x-1">
                  <button
                    onClick={() => setCurrentPage(ev.id)}
                    className="rounded border-2 border-blue-200 font-semibold capitalize px-4 py-2"
                  >
                    Learn More
                  </button>
                  <button
                    className="rounded gradient text-gray-100 font-semibold capitalize px-4 py-2"
                    onClick={() => handleEventApplication(ev.id)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
// Renders other events in grid
const Events = () => {
  const [state] = useState(eventsData.filter((ev) => ev.type !== 'main-event'));
  const { handleEventApplication } = useContext(NotificationContext);
  const { setCurrentPage } = useContext(PageContext);
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {state.map((ev, index) => {
        return (
          <div key={index} className="rounded overflow-hidden relative flex">
            <img
              className="w-32 md:w-40 lg:w-48 h-auto object-cover"
              src={ev.image}
            />
            {ev.premium && (
              <i className="fas fa-crown absolute top-0 right-0 p-3 text-orange-400 text-xl" />
            )}
            <div className="absolute top-0 left-0 p-2">
              <span className="inline-block bg-secondary rounded-full px-3 py-1 text-xs font-semibold text-gray-100">
                {ev.tag}
              </span>
            </div>
            <div className="px-6 py-2 mx-auto bg-white w-full">
              <p className="font-bold text-l text-primary mb-1">{ev.title}</p>
              <p className="text-gray-700 text-sm font-semibold mb-1">
                <i className="far fa-calendar-alt pr-2" />
                {ev.date}
              </p>
              <p className="text-gray-500 text-xs mb-1">
                <i className="far fa-calendar-times pr-2" />
                Deadline : {ev.deadline}
              </p>
              <p className="text-gray-500 text-xs mb-2">
                <i className="fas fa-map-marker-alt pr-2" />
                {ev.location}
              </p>
              <div className="space-x-1">
                <button
                  onClick={() => setCurrentPage(ev.id)}
                  className="rounded border-2 border-blue-200 text-sm font-semibold capitalize px-3 py-1"
                >
                  Learn More
                </button>
                <button
                  className="rounded gradient text-gray-100 text-sm font-semibold capitalize px-3 py-1"
                  onClick={() => handleEventApplication(ev.id)}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Render React SPA
ReactDOM.render(<App />, document.getElementById('root'));
