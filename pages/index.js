/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import {BsGithub,BsLinkedin,BsTwitter} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai";
import { RoughNotation} from "react-rough-notation";
import Image from "next/image";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import avatar from "../public/images/avatar1.jpg"
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";


// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 30 },
      { y: 0 }
    );
  }, []);

  return (
    <>
      <Head>
        <title>{data.name}</title>
        <link rel="shortcut icon" href="/images/collins-mbathi.png" />
        <meta name="description" content="Hello 👋 Software Engineer  , Technical Writer and a Community Advocate"/>
       
      </Head>
      {/* This button should not go into production */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-5 right-5">
          <Link href="/edit">
            <Button type="primary">Edit Data</Button>
          </Link>
        </div>
      )}

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
               <RoughNotation
            type="underline"
            show={true}
            color="#13b57b"
            animationDelay={800}
            animationDuration={1200}>
              {data.headerTaglineOne}
              </RoughNotation>
            </h1>

            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              <RoughNotation
             type="underline"
             show={true}
             color="#00afef"
             animationDelay={1400}
             animationDuration={1200}
             >
              {data.headerTaglineTwo}
              </RoughNotation>
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              <RoughNotation
             type="underline"
             show={true}
             color="#FFb900"
             animationDelay={1700}
             animationDuration={1200}
             >
              {data.headerTaglineThree}
              </RoughNotation>
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
               <RoughNotation
             type="underline"
             show={true}
             color="red"
             animationDelay={1400}
             animationDuration={1200}
            >
              {data.headerTaglineFour}
              </RoughNotation>
            </h1>
          </div>
          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-3 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
        <div className="mt-5 tablet:grid grid-cols-1 laptop:grid-cols-2 gap-3">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{data.name}</h3>
            <div className="text-center text-gray-500 dark:text-gray-400">{data.headerTaglineThree}</div>
            <div className="text-gray-500 dark:text-gray-400">{data.headerTaglineFour}</div>
            <div className="flex space-x-3 pt-6">
              <AiOutlineMail className="cursor-pointer" href={`mailto:collinsmbathi@gmail.com`} />
              <BsGithub className="cursor-pointer" href="https://github.com/Collins87mbathi" />
              <BsLinkedin className="cursor-pointer" href="https://www.linkedin.com/in/collins-mbathi-a39a221b9/" />
              <BsTwitter className="cursor-pointer" href="https://twitter.com/collinsperez6"/>
            </div>
          </div>
          <div className="prose text-xl max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
          Hello there! My name is <b className="text-blue-500">Collins Mbathi</b>, And I work as a <b className="text-blue-500">software engineer, technical writer and community advocate.</b> I live in Nairobi.

I have three years of experience writing JavaScript code, and I've created personal projects as well as excellent client websites, some of which are used by the community to solve everyday problems. I also write articles in which I discuss how to develop applications, write tests, integrate with CircleCI and other CI/CD platforms, and document.


As a community supporter, I give talks and introduce newcomers to the world of technology, and I am a core leader at Google Developers Student Club.

Here are a few technologies I've recently worked with: 

<b className="text-blue-500">Figma</b>,
<b className="text-blue-500">Sanity.io</b>,
<b className="text-blue-500">React JS</b>,
<b className="text-blue-500">Next JS</b>,
<b className="text-blue-500">Node JS</b>,
<b className="text-blue-500">Express JS</b>,
<b className="text-blue-500">MongoDB</b>,
<b className="text-blue-500">Mysql</b>,
<b className="text-blue-500">Git</b>,
<b className="text-blue-500">GitHub</b>,
<b className="text-blue-500">Docker</b>,
<b className="text-blue-500">AWS Heroku</b>,
<b className="text-blue-500">Digital Ocean</b>,

I'm actively looking for a new job as a Software Engineer and would like to be notified of any new openings.
            
            </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
