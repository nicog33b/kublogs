'use client';
import Image from "next/image";
import AdminPost from "./components/Home/adminPost";
import FilterTabs from "./components/Home/filterTabs";

export default function Home() {
  return (
    

    <div className='mt-[3rem]'>
      <FilterTabs></FilterTabs>
      <AdminPost></AdminPost>
    </div>
  );
}
