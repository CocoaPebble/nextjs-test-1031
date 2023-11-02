'use client'

import React from 'react';
import { Link } from 'react-scroll';

interface Section {
  id: string;
  title: string;
  content?: string;
}

const IndexComponent: React.FC = () => {
  const sections: Section[] = [
    { id: 'section1', title: '标题1', content: '这里是标题1的内容...Hi Aleksandar, I was captivated by your profile as an accomplished member of UPS. Your journey and experiences truly resonate with my aspirations, especially considering my strong willing to join in UPS. I would be extremely grateful if you would consider connecting with me.' },
    { id: 'section2', title: '标题2', content: "这里是标题2的内容..., I wanted to inquire if BOA is currently seeking software engineering talent to join its team. If there are openings for software engineers, I would greatly appreciate it if you could consider referring me for a suitable position. I'm excited about the prospect of contributing to BOA's technological advancements and collaborating with a team of talented professionals." },
    { id: 'section3', title: '标题3', content: '这里是标题3的内容...The overall goal of YC is to help startups really take off. They arrive at YC at all different stages. Some haven’t even started working yet, and others have been launched for a year or more. But whatever stage a startup is at when they arrive, our goal is to help them to be in dramatically better shape 3 months later. For most startups, better shape translates into two things: to have a better product with more users, and to have more options for raising money. Startups at all stages benefit from the intensity of YC. That’s probably the best word to describe the atmosphere. For 3 months, it’s all startup, all the time. Everyone around you—us, the other founders in your batch, the alumni, the speakers, the investors—wants to help your startup succeed. In that atmosphere it’s hard not to be highly motivated. And that kind of extraordinary motivation is what one needs to do something as difficult as starting a startup. Many founders describe the 11 weeks leading up to Demo Day as the most productive period in their lives. Though YC continues after the 3 month cycle, and the alumni community is an increasingly valuable resource, those 11 weeks are still the most important thing. You can’t make people something they’re not, but the right conditions can bring out the best in them. And since most people have way more potential than they realize, they’re often surprised by what they’re capable of.' },
    { id: 'section4', title: '标题4', content: '这里是标题4的内容...The overall goal of YC is to help startups really take off. They arrive at YC at all different stages. Some haven’t even started working yet, and others have been launched for a year or more. But whatever stage a startup is at when they arrive, our goal is to help them to be in dramatically better shape 3 months later. For most startups, better shape translates into two things: to have a better product with more users, and to have more options for raising money. Startups at all stages benefit from the intensity of YC. That’s probably the best word to describe the atmosphere. For 3 months, it’s all startup, all the time. Everyone around you—us, the other founders in your batch, the alumni, the speakers, the investors—wants to help your startup succeed. In that atmosphere it’s hard not to be highly motivated. And that kind of extraordinary motivation is what one needs to do something as difficult as starting a startup. Many founders describe the 11 weeks leading up to Demo Day as the most productive period in their lives. Though YC continues after the 3 month cycle, and the alumni community is an increasingly valuable resource, those 11 weeks are still the most important thing. You can’t make people something they’re not, but the right conditions can bring out the best in them. And since most people have way more potential than they realize, they’re often surprised by what they’re capable of.The overall goal of YC is to help startups really take off. They arrive at YC at all different stages. Some haven’t even started working yet, and others have been launched for a year or more. But whatever stage a startup is at when they arrive, our goal is to help them to be in dramatically better shape 3 months later. For most startups, better shape translates into two things: to have a better product with more users, and to have more options for raising money. Startups at all stages benefit from the intensity of YC. That’s probably the best word to describe the atmosphere. For 3 months, it’s all startup, all the time. Everyone around you—us, the other founders in your batch, the alumni, the speakers, the investors—wants to help your startup succeed. In that atmosphere it’s hard not to be highly motivated. And that kind of extraordinary motivation is what one needs to do something as difficult as starting a startup. Many founders describe the 11 weeks leading up to Demo Day as the most productive period in their lives. Though YC continues after the 3 month cycle, and the alumni community is an increasingly valuable resource, those 11 weeks are still the most important thing. You can’t make people something they’re not, but the right conditions can bring out the best in them. And since most people have way more potential than they realize, they’re often surprised by what they’re capable of.The overall goal of YC is to help startups really take off. They arrive at YC at all different stages. Some haven’t even started working yet, and others have been launched for a year or more. But whatever stage a startup is at when they arrive, our goal is to help them to be in dramatically better shape 3 months later. For most startups, better shape translates into two things: to have a better product with more users, and to have more options for raising money. Startups at all stages benefit from the intensity of YC. That’s probably the best word to describe the atmosphere. For 3 months, it’s all startup, all the time. Everyone around you—us, the other founders in your batch, the alumni, the speakers, the investors—wants to help your startup succeed. In that atmosphere it’s hard not to be highly motivated. And that kind of extraordinary motivation is what one needs to do something as difficult as starting a startup. Many founders describe the 11 weeks leading up to Demo Day as the most productive period in their lives. Though YC continues after the 3 month cycle, and the alumni community is an increasingly valuable resource, those 11 weeks are still the most important thing. You can’t make people something they’re not, but the right conditions can bring out the best in them. And since most people have way more potential than they realize, they’re often surprised by what they’re capable of.' },
  ];

  return (
    <div className="container px-20 mx-auto my-8 p-4">
      <div className="flex">

        <div className="w-1/4 pr-2">
          {/* 侧边栏 */}
          <ul className="sticky top-4">
            {sections.map((section) => (
              <li key={section.id} className="mb-4">
                <Link
                  to={section.id}
                  spy
                  smooth
                  duration={500}
                  className="cursor-pointer"
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 正文 */}
        <div className="w-3/4">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="mb-16">
              <h1 className="text-xl font-bold">{section.title}</h1>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexComponent;
