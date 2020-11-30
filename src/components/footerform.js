/** @jsx jsx */
import { jsx, Styled, Input, Select, Button } from "theme-ui";

const FooterForm = () => {
  return (
    <div className="footerForm">
      <Input placeholder="First Name *" />
      <Input placeholder="Last Name *" />
      <Input placeholder="Email *" />
      <Input placeholder="Phone Number" />
      <Input placeholder="Company Name" />
      <Input placeholder="Website URL" />
      <Select
        sx={{
          color: "white",
          opacity: 0.24,
        }}
      >
        <option value="">How many employees work there?</option>
        <option value="1-10">1-10</option>
        <option value="10-100">1-100</option>
        <option value="100-500">100-500</option>
        <option value="500-1000">500-1000</option>
        <option value="1000+">1000+</option>
      </Select>
      <Button variant="primary">Send request</Button>
    </div>
  );
};

export default FooterForm;
