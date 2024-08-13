// import { Accordion } from "react-bootstrap";
// import {
//   getLongYearName,
//   noAnsYearList,
//   parseProblemFilename,
//   shuffle,
// } from "../../misc";
// import MathProblemRoot from "../../routes/MainPage/MathProblemRoot";
// import PuppProblemRoot from "../../routes/MathPuppPage/PuppProblemRoot";
// import HistProblemRoot from "../../routes/HistPage/HistProblemRoot";
// import { useDarkMode } from "../layout/DarkModeContext";
// import SingleProblem from "./SingleProblem";
// import { useEffect, useState } from "react";

interface TopicItemBodyProps {
  topic: { topic: string; name: string };
  yearList: string[];
  nrTopicLut: { filename: string; topic: string; answer?: string }[];
}

export default function TopicItemBody({
  topic,
  yearList,
  nrTopicLut,
}: TopicItemBodyProps) {
  return <></>;
  //   const { isShuffleOn } = useDarkMode();
  //   const [problemList, setProblemList] = useState(
  //     nrTopicLut.filter((problem) => {
  //       const currProblemInfo = parseProblemFilename(
  //         problem.filename
  //       );
  //       return (
  //         yearList.includes(currProblemInfo.year) && problem.topic === topic.topic
  //       );
  //     })
  //   );
  //   useEffect(() => {
  //     setProblemList(
  //       shuffle(
  //         nrTopicLut.filter((problem) => {
  //           const currProblemInfo: any = parseProblemFilename(
  //             subject,
  //             problem.filename
  //           );
  //           return (
  //             yearList.includes(currProblemInfo.year) &&
  //             problem.topic === topic.topic
  //           );
  //         }),
  //         isShuffleOn
  //       )
  //     );
  //   }, [yearList, isShuffleOn, nrTopicLut, subject, topic.topic]);
  //   return (
  //     <Accordion.Body>
  //       {problemList.map((problem) => {
  //         const currProblemInfo: any = parseProblemFilename(
  //           "math",
  //           problem.filename
  //         );
  //         return (
  //           <div key={problem.filename} style={{}}>
  //             <hr style={{ border: "3px solid black" }} />
  //             {currProblemInfo.problemType === "sub" && subject === "math" && (
  //               <MathProblemRoot currProblemInfo={currProblemInfo} />
  //             )}
  //             {currProblemInfo.problemType === "questions" &&
  //               subject === "hist" && (
  //                 <HistProblemRoot questionsFilename={problem.filename} />
  //               )}
  //             {currProblemInfo.problemType === "sub" && subject === "pupp" && (
  //               <PuppProblemRoot currProblemInfo={currProblemInfo} />
  //             )}
  //             <SingleProblem
  //               filename={problem.filename}
  //               subject={subject}
  //               answerFilenameOrAnswer={
  //                 noAnsYearList[currProblemInfo.subjectExam].includes(currProblemInfo.year)
  //                 nrTopicLut.find((pr) => pr.filename === problem.filename)
  //                   ?.answer
  //               }
  //             />
  //           </div>
  //         );
  //       })}
  //     </Accordion.Body>
  //   );
}
