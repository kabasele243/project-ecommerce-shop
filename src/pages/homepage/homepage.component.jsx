import React from "react";
import Directory from "../../components/directory/directory.component";
import Footer from "../../components/footer/footer.component"

import { HomePageContainer } from "./homepage.styles";
const HomePage = () => (
  <HomePageContainer>
    <Directory />
    <Footer/>
  </HomePageContainer>
);

export default HomePage;
