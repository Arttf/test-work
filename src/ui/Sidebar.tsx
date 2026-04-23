import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiInbox, HiShoppingBag, HiUser } from 'react-icons/hi';

export default function AppSidebar() {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Задание 1
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Задание 2
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Задание 3
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Задание 4
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Задание 5
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Задание 6
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}