import Wrapper from "../assets/wrappers/SmallSidebar"
import { useDashbordContext } from "../pages/DashboardLayout"

const SmallSidebar = () => {
const data = useDashbordContext();
console.log(data);

  return (
    <Wrapper>SmallSidebar</Wrapper>
  )
}

export default SmallSidebar