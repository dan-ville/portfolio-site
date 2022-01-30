import { useNavigate } from "react-router-dom"
import b2b from "../../../../assets/img/b2b.png"
import Button from "../../../../assets/UI/Button"
import {
  Title,
  FeaturedThumbnail,
  Description,
} from "../../Project/Project.styles"
import { ProjectsWrapper } from "../../Work.styles"
import one2TripImages from "./img/images"

const {
  dynamicSearch,
  filteredSearchResults,
  hotelDetail,
  profileForm,
  roomSelection,
  sumTotal,
} = one2TripImages

const One2Trip = () => {
  const navigate = useNavigate()
  const goToAll = () => {
    navigate("/work/1")
  }

  return (
    <ProjectsWrapper>
      <Button onClick={goToAll}>All projects</Button>
      <Title>One2Trip</Title>
      <Description>
        During my time working at Vision Travel, I was tasked with creating the
        front-end of the company's B2B application, One2Trip, which functions as
        a point of sale for all the company products in the realm of tourism, as
        well as a dashboard for tracking bookings, commissions, and more.
      </Description>
      <Description>
        I learned to implement React component libraries, routing,
        internationalization, server-side rendering, and multiple CSS paradigms.
      </Description>
      <FeaturedThumbnail src={b2b} alt="login" />
      {/* <Description>
        Server-side rendering allows us to create personalized views based on user data from
        our database and implement forms like in this personal information page.
      </Description>
      <FeaturedThumbnail src={profileForm} alt="dynamic search form" /> */}
      <h3>Hotel search</h3>
      <Description>
        Here is a case study of how I designed a component that lets agents look
        for hotel and make reservations. React state hooks in functional
        components allows us to create dynamic form controls, and we use Ant
        Design's React component library to manage form state.
      </Description>
      <FeaturedThumbnail src={dynamicSearch} alt="dynamic search form" />
      <Description>
        The form submission allows us to retrieve listing results from third
        party services via our company API. An Axios instance sets the
        authorization header for all AJAX calls, since the API uses token-based
        authentication.
      </Description>
      <Description>
        A side panel shows several filters that can be used in aggregation to
        filter through the search results by price, rating, lodging type, etc.
        To achieve this, I used a React useState hook in the parent component to
        hold a state object with the corresponding filter properties, and the
        setState handler is passed to the <code>Filter</code> component. In the{" "}
        <code>Filter</code> component, each individual filter component takes a
        handler function that updates the filter object state. Meanwhile, the{" "}
        <code>Listings</code> component evaluates which results to show based on
        the filter state object.
      </Description>
      <Description>
        Then, the Listings component takes the results of the search and maps
        over a hotels array, and each hotel item in the list takes the user to a{" "}
        <code>Detail</code> component. <code>React-router-dom</code> helps
        handle the navigation to the <code>Detail</code> using url parameters.
      </Description>
      <FeaturedThumbnail
        src={filteredSearchResults}
        alt="dynamic search form"
      />
      <Description>
        The majority of the dashboard and application is built using Ant Design
        components, but some are custom designs using{" "}
        <code>styled-components</code> or SASS modules.
      </Description>
      <FeaturedThumbnail src={hotelDetail} alt="dynamic search form" />
      <Description>
        Based on the passenger accomodation settings that the user defines at
        the search form, lists are dynamically rendered to allow the user to
        pick from hotel rooms that match the number of adults and children
        provided. In the search, we required two rooms, one with 1 adult and 1
        child, and one with 1 adult and two children. Therefore, the available
        rooms are filtered to match those settings.
      </Description>
      <FeaturedThumbnail src={roomSelection} alt="dynamic search form" />
      <Description>
        Finally, a collapsible panel displays the total and can be expanded to
        show the details in a concise, item-by-item format. The{" "}
        <code>Reserve</code> button takes the user to a booking details page to
        finalize the reservation.
      </Description>
      <FeaturedThumbnail src={sumTotal} alt="dynamic search form" />
      <Description>
        That's the end of the preview of this project. Other components provide
        the agents with the ability to sell Flights and Tourism packages. Still
        other components allow the user to transfer funds from e-wallet
        accounts, create custom handling fees for each product, register and
        manage account credit cards, visualize a record of earned commissions,
        manage profile information, and see all the booking details for each
        reservation. This is the first holistic tool that Vision Travel has
        produced to leverage all the services they provide their agents in a
        singular application.
      </Description>
    </ProjectsWrapper>
  )
}

export default One2Trip
