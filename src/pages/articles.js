import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation, useParams,
} from "react-router-dom";

import blokImg1 from './img/Rectangle 7.png';
import blokImg2 from './img/Rectangle 3.png';
import blokImg3 from './img/Rectangle 6.png';
import blokImg4 from './img/Rectangle 12.png';
import blokImg5 from './img/Rectangle 10.png';
import blokImg6 from './img/Rectangle 11.png';

import './style/style-articles.css';


const Articles = () => {
const location = useLocation();
const lis = location.pathname;
const {id} = useParams()



if(lis == "/"){
    return (







    <div className = 'blok-margin'>

     <Link className="blok-a" to='/articles/1'>
             <img src={blokImg1} className="blok-img-new" alt="img1" />
        <div className = 'blok-info'>
            <p>
              Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago
            </p>
            <span>https://www.reuters.com/article</span>
        </div>
     </Link>


     <Link className="blok-a" to='/articles/2'>
             <img src={blokImg2} className="blok-img-new" alt="img2" />
        <div className = 'blok-info'>
            <p>
              Jobs for Economic Majors: Specialized/unique jobs
            </p>
            <span>Jobs for Economic Majors: Specialized/unique jobs https://www.thebalancecareers.com</span>
        </div>
     </Link>


     <Link className="blok-a" to='/articles/3'>
             <img src={blokImg3} className="blok-img-new" alt="img3" />
        <div className = 'blok-info'>
            <p>
              GM extends vehicle production cuts due to global chip shortage
            </p>
            <span>https://www.reuters.com/article</span>
        </div>
     </Link>


     <Link className="blok-a" to='/articles/4'>
             <img src={blokImg4} className="blok-img-new" alt="img4" />
        <div className = 'blok-info'>
            <p>
              Analysis: Can you buy a Tesla with bitcoin? How the payments might work
            </p>
        </div>
     </Link>

     <Link className="blok-a" to='/articles/5'>
             <img src={blokImg5} className="blok-img-new" alt="img5" />
        <div className = 'blok-info'>
            <p>
              TOP stocks for February 2021
            </p>
        </div>
     </Link>



     <Link className="blok-a" to='/articles/6'>
             <img src={blokImg6} className="blok-img-new" alt="img6" />
        <div className = 'blok-info'>
            <p>
              Honda raises full-year profit forecast helped by car sales rebound, cost cuts
            </p>
        </div>
     </Link>
    </div>



 );
}
if(lis == "/articles/1"){return (<Articles1/>);}
if(lis == "/articles/2"){return (<Articles2/>);}
if(lis == "/articles/3"){return (<Articles3/>);}
if(lis == "/articles/4"){return (<Articles4/>);}
if(lis == "/articles/5"){return (<Articles5/>);}
if(lis == "/articles/6"){return (<Articles6/>);}

   
};


const Articles1 = () => {
    return (
             <div className = 'blok-margin-new-info'>
             <h1>Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago</h1>
             <img src={blokImg1} className="blok-img-new-info" alt="img1" />
             <p className = 'blok-p-new-info'>Economics majors learn to gather, organize, and interpret data, using mathematical formulas and statistics to make calculations. They also create models to predict the impact of investments, policy decisions, industry trends, demographics, climate change, and much more.
Although economics majors must be able to analyze problems and propose solutions, success in the field also requires solid communication skills. Individuals working in economics must be able to translate their complex findings into a format that business leaders, legislators, and everyday people can understand.
While graduates with a degree in economics are masters of the chart and graph as tools for summarizing trends and results, the ability to write clear descriptions and present complicated information to others are also vital skills for the economics major.
Given the breadth of the major, there are many possible career choices for people with an economics degree. To choose the right career you will need to consider your other skills, interests, and values.
Here are some job options to consider when you're choosing a career path with a degree in economics.
Economic consultants use analytical and research skills to carry out studies regarding economic scenarios. They analyze industry trends to help organizations improve their performance. They might work for organizations in a variety of industries, including business, finance, healthcare, education, the government, and more.
Economic consultants can also act as expert witnesses in legal cases to assess economic damages, analyze intellectual property and antitrust violations, and to address regulatory violations.
Salary: PayScale estimates that the average annual salary for an economic consultant is $74,630. The bottom 10% earn up to $55,000 and the top 10% earn at least $110,000.
Just like economics majors, compensation and benefits managers must be able to think in numbers, since they evaluate options for pay and benefits. They study trends in the labor market and assess supply and demand for various classes of job.
Compensation and benefits managers research pay and benefits in similar organizations within their industry to establish a competitive structure for their company’s pay and benefits.
They create reports and present their findings to senior management, and might also work with their company's human resources department.
Salary: The BLS estimated that compensation and benefits managers earned a median annual salary of $122,270 in May 2019. The bottom 10% earned less than $69,870 and the top 10% earned more than $208,000.
</p>

             <div className = 'blok-comment-new'>
              <h3>Experts Comment</h3>
              <p>
Economics majors learn to gather, organize, and interpret data, using mathematical formulas and statistics to make calculations. They also create models to predict the impact of investments, policy decisions, industry trends, demographics, climate change, and much more.
Although economics majors must be able to analyze problems and propose solutions, success in the field also requires solid communication skills. Individuals working in economics must be able to translate their complex findings into a format that business leaders, legislators, and everyday people can understand.
While graduates with a degree in economics are masters of the chart and graph as tools for summarizing trends and results, the ability to write clear descriptions and present complicated information to others are also vital skills for the economics major.
Given the breadth of the major, there are many possible career choices for people with an economics degree. To choose the right career you will need to consider your other skills, interests, and values.
              </p>
             </div>
             </div>


    );
};


const Articles2 = () => {
    return (
             <div className = 'blok-margin-new-info'>
             <h1>Jobs for Economic Majors: Specialized/unique jobs</h1>
             <img src={blokImg2} className="blok-img-new-info" alt="img2" />
             <p className = 'blok-p-new-info'>Economics majors learn to gather, organize, and interpret data, using mathematical formulas and statistics to make calculations. They also create models to predict the impact of investments, policy decisions, industry trends, demographics, climate change, and much more.
Although economics majors must be able to analyze problems and propose solutions, success in the field also requires solid communication skills. Individuals working in economics must be able to translate their complex findings into a format that business leaders, legislators, and everyday people can understand.
While graduates with a degree in economics are masters of the chart and graph as tools for summarizing trends and results, the ability to write clear descriptions and present complicated information to others are also vital skills for the economics major.
Given the breadth of the major, there are many possible career choices for people with an economics degree. To choose the right career you will need to consider your other skills, interests, and values.
Here are some job options to consider when you're choosing a career path with a degree in economics.
Economic consultants use analytical and research skills to carry out studies regarding economic scenarios. They analyze industry trends to help organizations improve their performance. They might work for organizations in a variety of industries, including business, finance, healthcare, education, the government, and more.
Economic consultants can also act as expert witnesses in legal cases to assess economic damages, analyze intellectual property and antitrust violations, and to address regulatory violations.
Salary: PayScale estimates that the average annual salary for an economic consultant is $74,630. The bottom 10% earn up to $55,000 and the top 10% earn at least $110,000.
Just like economics majors, compensation and benefits managers must be able to think in numbers, since they evaluate options for pay and benefits. They study trends in the labor market and assess supply and demand for various classes of job.
Compensation and benefits managers research pay and benefits in similar organizations within their industry to establish a competitive structure for their company’s pay and benefits.
They create reports and present their findings to senior management, and might also work with their company's human resources department.
Salary: The BLS estimated that compensation and benefits managers earned a median annual salary of $122,270 in May 2019. The bottom 10% earned less than $69,870 and the top 10% earned more than $208,000.
</p>

             <div className = 'blok-comment-new'>
              <h3>Experts Comment</h3>
              <p>
Economics majors learn to gather, organize, and interpret data, using mathematical formulas and statistics to make calculations. They also create models to predict the impact of investments, policy decisions, industry trends, demographics, climate change, and much more.
Although economics majors must be able to analyze problems and propose solutions, success in the field also requires solid communication skills. Individuals working in economics must be able to translate their complex findings into a format that business leaders, legislators, and everyday people can understand.
While graduates with a degree in economics are masters of the chart and graph as tools for summarizing trends and results, the ability to write clear descriptions and present complicated information to others are also vital skills for the economics major.
Given the breadth of the major, there are many possible career choices for people with an economics degree. To choose the right career you will need to consider your other skills, interests, and values.
              </p>
             </div>
             </div>


    );
};


const Articles3 = () => {
    return (
             <div className = 'blok-margin-new-info'>
             <h1>GM extends vehicle production cuts due to global chip shortage</h1>
             <img src={blokImg3} className="blok-img-new-info" alt="img3" />
             <p className = 'blok-p-new-info'>Economics majors learn to gather, organize, and interpret data, using mathematical formulas and statistics to make calculations. They also create models to predict the impact of investments, policy decisions, industry trends, demographics, climate change, and much more.
Although economics majors must be able to analyze problems and propose solutions, success in the field also requires solid communication skills. Individuals working in economics must be able to translate their complex findings into a format that business leaders, legislators, and everyday people can understand.
While graduates with a degree in economics are masters of the chart and graph as tools for summarizing trends and results, the ability to write clear descriptions and present complicated information to others are also vital skills for the economics major.
Given the breadth of the major, there are many possible career choices for people with an economics degree. To choose the right career you will need to consider your other skills, interests, and values.
Here are some job options to consider when you're choosing a career path with a degree in economics.
Economic consultants use analytical and research skills to carry out studies regarding economic scenarios. They analyze industry trends to help organizations improve their performance. They might work for organizations in a variety of industries, including business, finance, healthcare, education, the government, and more.
Economic consultants can also act as expert witnesses in legal cases to assess economic damages, analyze intellectual property and antitrust violations, and to address regulatory violations.
Salary: PayScale estimates that the average annual salary for an economic consultant is $74,630. The bottom 10% earn up to $55,000 and the top 10% earn at least $110,000.
Just like economics majors, compensation and benefits managers must be able to think in numbers, since they evaluate options for pay and benefits. They study trends in the labor market and assess supply and demand for various classes of job.
Compensation and benefits managers research pay and benefits in similar organizations within their industry to establish a competitive structure for their company’s pay and benefits.
They create reports and present their findings to senior management, and might also work with their company's human resources department.
Salary: The BLS estimated that compensation and benefits managers earned a median annual salary of $122,270 in May 2019. The bottom 10% earned less than $69,870 and the top 10% earned more than $208,000.
</p>

             <div className = 'blok-comment-new'>
              <h3>Experts Comment</h3>
              <p>
Economics majors learn to gather, organize, and interpret data, using mathematical formulas and statistics to make calculations. They also create models to predict the impact of investments, policy decisions, industry trends, demographics, climate change, and much more.
Although economics majors must be able to analyze problems and propose solutions, success in the field also requires solid communication skills. Individuals working in economics must be able to translate their complex findings into a format that business leaders, legislators, and everyday people can understand.
While graduates with a degree in economics are masters of the chart and graph as tools for summarizing trends and results, the ability to write clear descriptions and present complicated information to others are also vital skills for the economics major.
Given the breadth of the major, there are many possible career choices for people with an economics degree. To choose the right career you will need to consider your other skills, interests, and values.
              </p>
             </div>
             </div>


    );
};

const Articles4 = () => {
    return (
             <div className = 'blok-margin-new-info'>
             <h1>Analysis: Can you buy a Tesla with bitcoin? How the payments might work</h1>
             <img src={blokImg4} className="blok-img-new-info" alt="img4" />
             <p className = 'blok-p-new-info'>Economics majors learn to gather, organize, and interpret data, using mathematical formulas and statistics to make calculations. They also create models to predict the impact of investments, policy decisions, industry trends, demographics, climate change, and much more.
Although economics majors must be able to analyze problems and propose solutions, success in the field also requires solid communication skills. Individuals working in economics must be able to translate their complex findings into a format that business leaders, legislators, and everyday people can understand.
While graduates with a degree in economics are masters of the chart and graph as tools for summarizing trends and results, the ability to write clear descriptions and present complicated information to others are also vital skills for the economics major.
Given the breadth of the major, there are many possible career choices for people with an economics degree. To choose the right career you will need to consider your other skills, interests, and values.
Here are some job options to consider when you're choosing a career path with a degree in economics.
Economic consultants use analytical and research skills to carry out studies regarding economic scenarios. They analyze industry trends to help organizations improve their performance. They might work for organizations in a variety of industries, including business, finance, healthcare, education, the government, and more.
Economic consultants can also act as expert witnesses in legal cases to assess economic damages, analyze intellectual property and antitrust violations, and to address regulatory violations.
Salary: PayScale estimates that the average annual salary for an economic consultant is $74,630. The bottom 10% earn up to $55,000 and the top 10% earn at least $110,000.
Just like economics majors, compensation and benefits managers must be able to think in numbers, since they evaluate options for pay and benefits. They study trends in the labor market and assess supply and demand for various classes of job.
Compensation and benefits managers research pay and benefits in similar organizations within their industry to establish a competitive structure for their company’s pay and benefits.
They create reports and present their findings to senior management, and might also work with their company's human resources department.
Salary: The BLS estimated that compensation and benefits managers earned a median annual salary of $122,270 in May 2019. The bottom 10% earned less than $69,870 and the top 10% earned more than $208,000.
</p>

             <div className = 'blok-comment-new'>
              <h3>Experts Comment</h3>
              <p>
Economics majors learn to gather, organize, and interpret data, using mathematical formulas and statistics to make calculations. They also create models to predict the impact of investments, policy decisions, industry trends, demographics, climate change, and much more.
Although economics majors must be able to analyze problems and propose solutions, success in the field also requires solid communication skills. Individuals working in economics must be able to translate their complex findings into a format that business leaders, legislators, and everyday people can understand.
While graduates with a degree in economics are masters of the chart and graph as tools for summarizing trends and results, the ability to write clear descriptions and present complicated information to others are also vital skills for the economics major.
Given the breadth of the major, there are many possible career choices for people with an economics degree. To choose the right career you will need to consider your other skills, interests, and values.
              </p>
             </div>
             </div>


    );
};


const Articles5 = () => {
    return (
             <div className = 'blok-margin-new-info'>
             <h1>TOP stocks for February 2021</h1>
             <img src={blokImg5} className="blok-img-new-info" alt="img5" />
             <p className = 'blok-p-new-info'>Economics majors learn to gather, organize, and interpret data, using mathematical formulas and statistics to make calculations. They also create models to predict the impact of investments, policy decisions, industry trends, demographics, climate change, and much more.
Although economics majors must be able to analyze problems and propose solutions, success in the field also requires solid communication skills. Individuals working in economics must be able to translate their complex findings into a format that business leaders, legislators, and everyday people can understand.
While graduates with a degree in economics are masters of the chart and graph as tools for summarizing trends and results, the ability to write clear descriptions and present complicated information to others are also vital skills for the economics major.
Given the breadth of the major, there are many possible career choices for people with an economics degree. To choose the right career you will need to consider your other skills, interests, and values.
Here are some job options to consider when you're choosing a career path with a degree in economics.
Economic consultants use analytical and research skills to carry out studies regarding economic scenarios. They analyze industry trends to help organizations improve their performance. They might work for organizations in a variety of industries, including business, finance, healthcare, education, the government, and more.
Economic consultants can also act as expert witnesses in legal cases to assess economic damages, analyze intellectual property and antitrust violations, and to address regulatory violations.
Salary: PayScale estimates that the average annual salary for an economic consultant is $74,630. The bottom 10% earn up to $55,000 and the top 10% earn at least $110,000.
Just like economics majors, compensation and benefits managers must be able to think in numbers, since they evaluate options for pay and benefits. They study trends in the labor market and assess supply and demand for various classes of job.
Compensation and benefits managers research pay and benefits in similar organizations within their industry to establish a competitive structure for their company’s pay and benefits.
They create reports and present their findings to senior management, and might also work with their company's human resources department.
Salary: The BLS estimated that compensation and benefits managers earned a median annual salary of $122,270 in May 2019. The bottom 10% earned less than $69,870 and the top 10% earned more than $208,000.
</p>

             <div className = 'blok-comment-new'>
              <h3>Experts Comment</h3>
              <p>
Economics majors learn to gather, organize, and interpret data, using mathematical formulas and statistics to make calculations. They also create models to predict the impact of investments, policy decisions, industry trends, demographics, climate change, and much more.
Although economics majors must be able to analyze problems and propose solutions, success in the field also requires solid communication skills. Individuals working in economics must be able to translate their complex findings into a format that business leaders, legislators, and everyday people can understand.
While graduates with a degree in economics are masters of the chart and graph as tools for summarizing trends and results, the ability to write clear descriptions and present complicated information to others are also vital skills for the economics major.
Given the breadth of the major, there are many possible career choices for people with an economics degree. To choose the right career you will need to consider your other skills, interests, and values.
              </p>
             </div>
             </div>

    );
};


const Articles6 = () => {
    return (
             <div className = 'blok-margin-new-info'>
             <h1>Honda raises full-year profit forecast helped by car sales rebound, cost cuts</h1>
             <img src={blokImg6} className="blok-img-new-info" alt="img6" />
             <p className = 'blok-p-new-info'>Economics majors learn to gather, organize, and interpret data, using mathematical formulas and statistics to make calculations. They also create models to predict the impact of investments, policy decisions, industry trends, demographics, climate change, and much more.
Although economics majors must be able to analyze problems and propose solutions, success in the field also requires solid communication skills. Individuals working in economics must be able to translate their complex findings into a format that business leaders, legislators, and everyday people can understand.
While graduates with a degree in economics are masters of the chart and graph as tools for summarizing trends and results, the ability to write clear descriptions and present complicated information to others are also vital skills for the economics major.
Given the breadth of the major, there are many possible career choices for people with an economics degree. To choose the right career you will need to consider your other skills, interests, and values.
Here are some job options to consider when you're choosing a career path with a degree in economics.
Economic consultants use analytical and research skills to carry out studies regarding economic scenarios. They analyze industry trends to help organizations improve their performance. They might work for organizations in a variety of industries, including business, finance, healthcare, education, the government, and more.
Economic consultants can also act as expert witnesses in legal cases to assess economic damages, analyze intellectual property and antitrust violations, and to address regulatory violations.
Salary: PayScale estimates that the average annual salary for an economic consultant is $74,630. The bottom 10% earn up to $55,000 and the top 10% earn at least $110,000.
Just like economics majors, compensation and benefits managers must be able to think in numbers, since they evaluate options for pay and benefits. They study trends in the labor market and assess supply and demand for various classes of job.
Compensation and benefits managers research pay and benefits in similar organizations within their industry to establish a competitive structure for their company’s pay and benefits.
They create reports and present their findings to senior management, and might also work with their company's human resources department.
Salary: The BLS estimated that compensation and benefits managers earned a median annual salary of $122,270 in May 2019. The bottom 10% earned less than $69,870 and the top 10% earned more than $208,000.
</p>

             <div className = 'blok-comment-new'>
              <h3>Experts Comment</h3>
              <p>
Economics majors learn to gather, organize, and interpret data, using mathematical formulas and statistics to make calculations. They also create models to predict the impact of investments, policy decisions, industry trends, demographics, climate change, and much more.
Although economics majors must be able to analyze problems and propose solutions, success in the field also requires solid communication skills. Individuals working in economics must be able to translate their complex findings into a format that business leaders, legislators, and everyday people can understand.
While graduates with a degree in economics are masters of the chart and graph as tools for summarizing trends and results, the ability to write clear descriptions and present complicated information to others are also vital skills for the economics major.
Given the breadth of the major, there are many possible career choices for people with an economics degree. To choose the right career you will need to consider your other skills, interests, and values.
              </p>
             </div>
             </div>


    );
};


export default Articles;


 
