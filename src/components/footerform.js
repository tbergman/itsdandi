/** @jsx jsx */
import { jsx, Styled, Input, Select, Button } from "theme-ui";

const FooterForm = () => {
  return (
    <div className="form">
      <Input id="namefield" placeholder="First Name *" />
      <Input placeholder="Last Name *" />
      <Input placeholder="Email *" />
      <Input placeholder="Phone Number" />
      <Input placeholder="Company Name" />
      <Input placeholder="Website URL" />
      <div className="dropdownwrapper">
        <select className="dropdown">

        <option value="">How many employees work there?</option>
                      <option value="0-249">0 to 249 people</option>
                      <option value="250-499">250 to 499 people</option>
                      <option value="500-999">500 to 999 people</option>
                      <option value="1000-2499">1,000 to 2,499 people</option>
                      <option value="2500-4999">2,500 to 4,999 people</option>
                      <option value="5000-9999">5,000 to 9,999 people</option>
                      <option value="10000-24999"
                        >10,000 to 24,999 people</option
                      >
                      <option value="25000-49999"
                        >25,000 to 49,999 people</option
                      >
                      <option value="50000+">50,000+ people</option>
          

        </select>
      </div>

      <div className="button">
        <Button variant="primary">Send request</Button>
      </div>
    </div>
  );
};

export default FooterForm;
