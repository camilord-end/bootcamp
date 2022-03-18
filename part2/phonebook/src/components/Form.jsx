import { Button } from "./Button";
import { Input } from "./Input";

export const Form = ({
  handleSubmit,
  handleName,
  handlePhone,
  name,
  phone,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input handle={handleName} label="Name" value={name} />
      <Input handle={handlePhone} label="Phone" value={phone} />
      <Button />
    </form>
  );
};
