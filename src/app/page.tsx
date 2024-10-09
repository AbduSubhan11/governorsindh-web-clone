import Image from "next/image";
import NavBar from "./component/NavBar";
import Heroes from "./component/Heroes";
import CourseDetail from "./component/CourseDetail";
import CourseSequence from "./component/Sequence&Advance";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
    <NavBar/>
    <Heroes/>
    <CourseDetail/>
    <CourseSequence/>
    <Footer/>
    </>
  );
}
