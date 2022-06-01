
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

function Tips() {
    const [show, setShow] = useState(true)
    const history = useHistory()
    function handleclose() {
        setShow(false)
        history.goBack("/WomenSpecialHome")

    }
    return (
        <div>

            <Modal
                className="modalBackdrop"
                show={show}
                onHide={handleclose}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Tips that you can use to get back to work after a career break </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>By Bhumika Khandelwal </p>
                    <video className="w-100" src="Tips_for_joining_after_a_career_break.mp4" controls />
                    <p>Getting up every day for years and going to work without much change does sound pretty tiring. In this situation, a break is a sort of temporary solution any woman will come with. Others look for a break when they start a family or taking care of their small kids becomes a priority. A few want to travel the whole world. So, if you too have taken a break from work, then let me tell you, you are not alone. Around 4 to 5% of women every year have to take a career break and it’s okay! The world doesn’t end here and you have a long way to go.  </p>
                    <p>But then you want to get back to work sooner or later and continue your professional journey. Though, in today’s competitive and demanding world getting back to work may not be that easy, taking care of a few things can really help.  So, without further delay, let’s go over some tips to help you get started. </p>
                    <h5>It’s never too late </h5>
                    <p>Don’t worry about the duration you took or the things you left. You can always start fresh and you can always pick up where you left off. Take all the time you need before you start the process of getting back out there. Just remember that you are not alone in this and that it is really never too late to be who you really want to be. </p>
                    <h5>Make up your mind </h5>
                    <p>You took the break for a reason. So before you get back to work, ensure that you really want to and are ready for it. Sometimes, we tend to look for work because we have nothing to do or we simply want to do something different. If you just want to try something different, find a hobby.</p>
                    <p>When a person misses her job or wants to get back to their normal life and is excited about it, that is when they are fully ready to go back to their work life. Importantly, understand if there is a skill gap for the job that you are looking for. If yes, it is better to acquire those skills before you start your job hunt. So be honest with yourself about this. </p>
                    <h5>Keep your options open </h5>
                    <p>There is too much which happens when you decide to start working again. There are job applications to fill, interviews to prepare, impressions to be good at and a lot. Now, since you are looking for another job, make sure to fill more than just one or two forms. It is important that you have a backup option or other opportunities when your application for your dream job gets rejected. Sometimes we don’t always get what we think is best for us. </p>
                    <h5>Reach out to your connections </h5>
                    <p>Working on your previous job must have helped you build a network. Use it. Connect with your friends, colleagues, mentors and ask them if they know any opening or possibility of job for you. In many cases, asking help from the known ones has been proved effective. Even try reaching out to your past employers if you had a good experience working with them. Joining a team or a company that you know can be quite helpful. </p>
                    <h5>Don’t rush into anything </h5>
                    <p>With sending out many applications, you will receive various offers. Wait for the right one. Don’t hop into the first job offer you receive. If you think that the job position is not something where you want to be at, then take your time. Wait for other companies to respond. There are a lot of options out there. Grabbing the very first opportunity just because it’s available immediately will again bring you back to the career break circle. This time, make it right! </p>
                    <h5>Be ready for what’s coming </h5>
                    <p>When called for an interview, don’t freak out. It is true that it’s been a long time since you had to interview but honestly it doesn’t have to be that much of a big deal. Go through the job profile that you have applied for and prepare accordingly. During the interview just address the answers confidently. Present yourself neatly and acknowledge everything you say. For better interview preparation you can do this too:  </p>
                    <ul>
                        <li>Watch some helpful youtube videos </li>
                        <li>Revise general questions which get asked </li>
                        <li>Find out about yourself such as what you do in your free time </li>
                        <li>Your work behaviour </li>
                        <li>Your strengths </li>
                        <li>Your weaknesses </li>
                    </ul>
                    <h5>Mention your career break as an advantage </h5>
                    <p>Don’t be ashamed or worry about the break you took. You did it because it seemed necessary right? So, embrace it. Talk about what you did. Whether you conducted some research work or explored a certain skill. Talk about your work or understanding which you gained about the certain job position during your career break. Don’t worry about you getting hired, as I said before there will be plenty of opportunities, just make sure you are confident and happy about the break you took. After all, there is no wrong in having a little spare time and space for yourself, is there?
                    </p>
                    <h5>Enjoy that one last day before getting back to normal </h5>
                    <p>You finally have the job you want and it is finally time to get back to work, but there is still one day left. Don’t use the whole day to prepare for the first day at your new job. Take a break for that one last day before that same routine starts again. Who knows when you will get such an opportunity again, right? It’s a known fact that life is a race and you have to be as fast as you can. This last day is your ticket to enjoy the slowness before you have to gear up again. </p>
                    <p>When it comes to choosing your career path ahead, it involves a lot of decisions. Take your time and explore every opportunity you have. Then make your decision wisely. Make sure not to rush or panic about losing any position. We have faith in you. You are definitely going to make it. </p>




                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleclose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Tips
