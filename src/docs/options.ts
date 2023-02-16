import { assets, healthCheck, home } from "./assets.api.docs";
import { version } from '../../package.json';
import { courseList, createCourse, courseById, courseByIdUpdate, courseByIdDelete, createCourseRequestBody, courseUpdatesRequestBody } from "./course.api.docs";
import { courseTopicList, createCourseTopic, courseTopicById, courseTopicByIdUpdate, courseTopicByIdDelete, courseTopicProgress, courseTopicProgressRequestBody, createCourseTopicRequestBody, courseTopicUpdatesRequestBody } from "./courseTopic.api.docs";
import { moduleList, createModule, moduleById, moduleByIdUpdate, moduleByIdDelete, createModuleRequestBody, moduleUpdatesRequestBody } from "./module.api.docs";
import { videosList, createVideos, videosById, videosByIdUpdate, videosByIdDelete, createVideosRequestBody, videosUpdatesRequestBody } from "./video.api.docs";
import { create_dynamicSignupForm, get_dynamicSignupForm } from "./auth.api.docs";
import { createTeam, teamByIdDelete, teamsById, teamsByIdUpdate, teamsList, createTeamRequestBody, teamUpdatesRequestBody, teamMembers } from "./team.api.docs";
import { notificationsTome, notificationWithPoster, notification, notificationsWithPosterRequestBody, notificationsRequestBody, notificationsAll, notificationsId } from "./notification.api.docs";
import { createWorksheetRequestBody, worksheetUpdatesRequestBody, createWorksheet, worksheetById, worksheetByIdUpdate, worksheetList, WorksheetsByIdDelete, worksheetResponse } from "./worksheets.api.docs";
import { organizationList, createOrganization, organizationSingle, organizationDelete, organizationUpdate, createOrganizationWithFile, organizationRequestBody, organizationRequestBodyWithFile, organizationUpdatesRequestBody, organizationBulkUpload, organizationDistricts, organizationCheckOrg, organizationCreateOrg } from "./organization.api.docs";
import { adminId, admins, changePassword, login, logout, registration } from "./admin.api.docs";
import { userSchema } from "../validations/user.validations";
import { addBadges, addStudent, bulkCreateStudent, getBadges, studentCertificate, studentChangePassword, studentId, studentLogin, studentLogout, studentRegister, studentResetPassword, students } from "./student.api.docs";
import { userById, userByIdDelete, userByIdUpdate, usersList } from "./users.api.docs";
import { badge } from "../models/badge.model";
import { mentorChangePassword, mentorLogin, mentorRegister, mentorResetPassword, mentors, mentorUpdateMobile, mentorUpdatePassword, mentorValidateOtp, mentorVerifyUser, mentorBulkUpload, mentorId, mentorManualResetPassword } from "./mentor.api.docs";
import { mentor } from "../models/mentor.model";
import { evaluatorChangePassword, evaluatorLogin, evaluatorRegistration, evaluators, evaluatorBulkUpload, evaluatorId } from "./evaluater.api.docs";
import { courseModulesById, courseModulesByIdDelete, courseModulesByIdUpdate, courseModulesList, createCourseModules } from "./courseModules.api.docs";
import { createQuiz, quizById, quizByIdDelete, quizByIdUpdate, quizList } from "./quiz.api.docs";
import { createQuizQuestion, quizQuestionById, quizQuestionByIdDelete, quizQuestionByIdUpdate, quizQuestionList } from "./quizQuestion.api.docs";
import { createFaq, faqById, faqByIdDelete, faqByIdUpdate, faqList } from "./faq.api.docs";
import { createFaqCategory, faqCategoryById, faqCategoryByIdDelete, faqCategoryByIdUpdate, faqCategoryList } from "./faqCategories.api.docs";
import { createEvaluationProcess, evaluationProcessById, evaluationProcessByIdDelete, evaluationProcessByIdUpdate, evaluationProcessList } from "./evluationProcess.api.docs";
import { createInstruction, InstructionById, InstructionByIdDelete, InstructionByIdUpdate, InstructionList } from "./instructions.api.docs";
import { createEvaluaterRating, evaluaterRatingById, evaluaterRatingByIdDelete, evaluaterRatingByIdUpdate, evaluaterRatingList } from "./evaluaterRating.api.docs";
import { CertificateById, CertificateByIdDelete, CertificateByIdUpdate, CertificateList, createCertificate, mobileCheck } from "./certificatesDownload.api.docs";
import { challengeById, challengeByIdDelete, challengeByIdUpdate, challengeList, createChallenge } from "./challenge.api.docs";
import { createTranslations, translationsById, translationsByIdDelete, translationsByIdUpdate, translationsKey, translationsList, translationsRefresh, translationsTranslateRefresh } from "./translations.api.docs";
import { badgesById, badgesByIdDelete, badgesByIdUpdate, badgesList, createBadges } from "./badges.api.docs";
import { createTutorialVideos, tutorialVideosById, tutorialVideosByIdDelete, tutorialVideosByIdUpdate, tutorialVideosList } from "./tutorialVideos.api.docs";
import { createSupportTickets, supportTicketsById, supportTicketsByIdDelete, supportTicketsByIdUpdate, supportTicketsList } from "./supportTickets.api.docs";
import { createMentorAttachments, mentorAttachmentsById, mentorAttachmentsByIdDelete, mentorAttachmentsByIdUpdate, mentorAttachmentsList } from "./mentorAttachments.api.docs";
import { createMentorCourses, mentorCoursesById, mentorCoursesByIdDelete, mentorCoursesByIdUpdate, mentorCoursesList } from "./mentorCourse.api.docs";
import { createUserTopicProgress, userTopicProgressById, userTopicProgressByIdDelete, userTopicProgressByIdUpdate, userTopicProgressList } from "./userTopicProgress.api.docs";
import { createReflectiveQuiz, reflectiveQuizById, reflectiveQuizByIdDelete, reflectiveQuizByIdUpdate, reflectiveQuizList, reflectiveQuizNextQuestion, reflectiveQuizResponse } from "./reflectiveQuiz.api.docs";
import { createQuizSurveys, quizSurveysById, quizSurveysByIdDelete, quizSurveysByIdUpdate, quizSurveysList, quizSurveysNextQuestion, quizSurveysResponse, quizSurveysResponses, quizSurveySurveyStatus } from "./surveryQuiz.api.docs";
import { createMentorTopicProgress, mentorTopicProgressById, mentorTopicProgressByIdDelete, mentorTopicProgressByIdUpdate, mentorTopicProgressList } from "./mentorTopicProgress.api.docs";
import { createSupportTicketsReplies, supportTicketsRepliesById, supportTicketsRepliesList } from "./supportTicketsReplies.api.docs";
import { challengeClearResponse, challengeCustomFilter, challengeDistrictWiseRating, challengeEvaluated, challengeEvaluationResult, challengeFetchRandom, challengeFileUpload, challengeFinalEvaluation, challengeInitiate, challengeResponseById, challengeResponseByIdDelete, challengeResponseByIdUpdate, challengeResponseList, challengeSubmittedDetails, challengeUpdateEntry, challengeUpdateSubmission, createChallengeResponse } from "./challengeResponse.api.docs";
import { createDashboard, dashboardById, dashboardByIdDelete, dashboardByIdUpdate, dashboardList, evaluatorStats, mapStats, mentorStats, refreshMapStats, refreshMapStatsLive, studentStats, studentStatsChallenges, studentStatsTeamProgress, teamStats } from "./dashboard.api.docs";
import { allMentorReports, challengesCount, challengesDistrictCount, courseComplete, courseInComplete, mentorRegList, mentorTeamsStudents, notRegister, notRegistered, preSurvey, userTopicProgress } from "./reports.api.docs";

// define Swagger options with specific properties
const options = {
    openapi: '3.0.1',
    info: {
        title: "Unislove",
        description: `Server application for UPSHIFT powdered by Unislove based on the OpenAPI 3.0 specification.You can find out more about Swagger at [https://swagger.io](https://swagger.io). You can now help us improve the API whether it's by making changes to the definition itself or to the code. That way, with time, we can improve the API in general.
        *Some useful links:*
        -[The Unisolve repository](https://github.com/swagger-api/swagger-petstore)
        -[The source API collection for the Unisolve](https://localhost:3002/docs.json)`,
        version,
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
        },
    },
    server: [
        {
            url: 'http://localhost:3002',
            description: 'development Server',
        },
    ],
    schemes: ['https', 'http'],
    tags: [
        {
            name: 'Assets',
        },
        {
            name: 'Auth',
            description: 'Auth operations'
        },
        {
            name: 'Admins',
        },
        {
            name: 'Evaluater',
        },
        {
            name: 'Mentors',
        },
        {
            name: 'Students',
        },
        {
            name: 'Users',
        },
        {
            name: 'Notifications',
        },
        {
            name: 'Courses',
        },
        {
            name: 'Courses modules',
        },
        {
            name: 'Videos',
        },
        {
            name: 'Teams',
        },
        {
            name: 'Course topics',
        },
        {
            name: 'Worksheets',
        },
        {
            name: 'User topic progress',
        },
        {
            name: 'Quiz',
        },
        {
            name: 'Quiz questions',
        },
        {
            name: 'FAQ',
        },
        {
            name: 'FAQ categories',
        },
        {
            name: 'Organization',
        },
        {
            name: 'Reflective quiz',
        },
        {
            name: 'Quiz surveys',
        },
        {
            name: 'Mentor course',
        },
        {
            name: 'Mentor attachments',
        },
        {
            name: 'Mentor topic progress',
        },
        {
            name: 'Support tickets',
        },
        {
            name: 'Support tickets replies',
        },
        {
            name: 'Challenges',
        },
        {
            name: 'Challenges response',
        },
        {
            name: 'Dashboard',
        },
        {
            name: 'Translations',
        },
        {
            name: 'Badges',
        },
        {
            name: 'Tutorial videos',
        },
        {
            name: 'Reports',
        },
        {
            name: 'Certificates download',
        },
        {
            name: 'Evaluator rating',
        },
        {
            name: 'Instructions',
        },
        {
            name: 'Evaluation process',
        }
    ],
    paths: {
        '/': {
            get: home
        },
        '/healthCheck': {
            get: healthCheck,
        },
        '/api/v1/auth/dynamicSignupForm': {
            post: create_dynamicSignupForm,
            get: get_dynamicSignupForm
        },
        '/api/v1/auth/roadMap': {
            post: create_dynamicSignupForm,
            get: get_dynamicSignupForm
        },
        '/api/v1/admins/register': {
            post: registration
        },
        '/api/v1/admins/login': {
            post: login
        },
        '/api/v1/admins/logout': {
            get: logout
        },
        '/api/v1/admins/changePassword': {
            put: changePassword
        },
        '/api/v1/admins': {
            get: admins
        },
        '/api/v1/admins/{id}': {
            get: adminId
        },
        '/api/v1/evaluators/register': {
            post: evaluatorRegistration
        },
        '/api/v1/evaluators/login': {
            post: evaluatorLogin
        },
        '/api/v1/evaluators/logout': {
            get: evaluatorLogin
        },
        '/api/v1/evaluators/changePassword': {
            put: evaluatorChangePassword
        },
        '/api/v1/evaluators': {
            get: evaluators
        },
        '/api/v1/evaluators/{id}': {
            get: evaluatorId
        },
        '/evaluators/bulkUpload': {
            evaluatorBulkUpload
        },
        '/api/v1/mentors/register': {
            post: mentorRegister
        },
        '/api/v1/mentors/validateOtp': {
            post: mentorValidateOtp
        },
        '/api/v1/mentors/login': {
            post: mentorLogin
        },
        '/api/v1/mentors/changePassword': {
            put: mentorChangePassword
        },
        '/api/v1/mentors/updatePassword': {
            put: mentorUpdatePassword
        },
        '/api/v1/mentors/verifyUser': {
            put: mentorVerifyUser
        },
        '/api/v1/mentors/updateMobile': {
            put: mentorUpdateMobile
        },
        '/api/v1/mentors/:mentor_user_id/deleteAllData': {
            // delete : deleteData
        },
        '/api/v1/mentors/resetPassword': {
            put: mentorResetPassword
        },
        '/api/v1/mentors/manualResetPassword': {
            put: mentorManualResetPassword
        },
        '/api/v1/mentors/regStatus': {
            
        },
        '/api/v1/mentors/bulkUpload': {
            mentorBulkUpload
        },
        '/api/v1/mentors': {
            get: mentors
        },
        '/api/v1/mentors/{id}': {
            get: mentorId
        },
        '/api/v1/students/register': {
            post: studentRegister
        },
        '/api/v1/students/addStudent': {
            post: addStudent
        },
        '/api/v1/students/bulkCreateStudent': {
            post: bulkCreateStudent
        },
        '/api/v1/students/login': {
            post: studentLogin
        },
        '/api/v1/students/logout': {
            get: studentLogout
        },
        '/api/v1/students/changePassword': {
            put: studentChangePassword
        },
        '/api/v1/students/resetPassword': {
            put: studentResetPassword
        },
        '/api/v1/students/{id}/studentCertificate': {
            get: studentCertificate
        },
        '/api/v1/students/{id}/badges': {
            get: getBadges,
            post: addBadges
        },
        '/api/v1/students/passwordUpdate': {

        },
        '/api/v1/students': {
            get: studentId
        },
        '/api/v1/students/{id}': {
            get: students
        },
        '/api/v1/students/withfile': {

        },
        '/api/v1/students/{id}/withfile': {
        },
        '/api/v1/users/updateMentorDetails': {

        },
        '/api/v1/users': {
            get: usersList
        },
        '/api/v1/users/{id}': {
            get: userById,
            put: userByIdUpdate,
            delete: userByIdDelete
        },
        '/api/v1/users/withfile': {
        },
        '/api/v1/users/{id}/withfile': {
        },
        '/api/v1/notifications/tome': {
            get: notificationsTome
        },
        '/api/v1/notifications/all': {
            get: notificationsAll
        },
        '/api/v1/notifications/send': {
            post: notification
        },
        '/api/v1/notifications/sendwithposter': {
            post: notificationWithPoster
        },
        '/api/v1/notifications/read/{id}': {
            get: notificationsId
        },
        '/api/v1/courses/test': {
        },
        '/api/v1/courses': {
            get: courseList,
            post: createCourse
        },
        '/api/v1/courses/{course_id}': {
            get: courseById,
            put: courseByIdUpdate,
            delete: courseByIdDelete
        },
        '/api/v1/courses/withfile': {
        },
        '/api/v1/courses/{id}/withfile': {
        },
        '/api/v1/courseModules': {
            get: courseModulesList,
            post: createCourseModules
        },
        '/api/v1/courseModules/{id}': {
            get: courseModulesById,
            put: courseModulesByIdUpdate,
            delete: courseModulesByIdDelete
        },
        '/api/v1/courseModules/withfile': {
        },
        '/api/v1/courseModules/{id}/withfile': {
        },
        '/api/v1/videos': {
            post: createVideos,
            get: videosList
        },
        '/api/v1/videos/{id}': {
            get: videosById,
            put: videosByIdUpdate,
            delete: videosByIdDelete
        },
        '/api/v1/videos/withfile': {
        },
        '/api/v1/videos/{id}/withfile': {
        },
        '/api/v1/teams/{id}/members': {
            get: teamMembers
        },
        '/api/v1/teams': {
            post: createTeam,
            get: teamsList
        },
        '/api/v1/teams/{id}': {
            get: teamsById,
            put: teamsByIdUpdate,
            delete: teamByIdDelete
        },
        '/api/v1/teams/withfile': {
        },
        '/api/v1/teams/{id}/withfile': {
        },
        '/api/v1/courseTopics': {
            post: createCourseTopic,
            get: courseTopicList
        },
        '/api/v1/courseTopics/{id}': {
            get: courseTopicById,
            put: courseTopicByIdUpdate,
            delete: courseTopicByIdDelete
        },
        '/api/v1/courseTopics/withfile': {
        },
        '/api/v1/courseTopics/{id}/withfile': {
        },
        '/api/v1/worksheets/{id}/response': {
            post: worksheetResponse
        },
        '/api/v1/worksheets': {
            post: createWorksheet,
            get: worksheetList
        },
        '/api/v1/worksheets/{id}': {
            get: worksheetById,
            put: worksheetByIdUpdate,
            delete: WorksheetsByIdDelete
        },
        '/api/v1/worksheets/withfile': {
        },
        '/api/v1/worksheets/{id}/withfile': {
        },
        '/api/v1/userTopicProgress': {
            get: userTopicProgressList,
            post: createUserTopicProgress
        },
        '/api/v1/userTopicProgress/{id}': {
            get: userTopicProgressById,
            put: userTopicProgressByIdUpdate,
            delete: userTopicProgressByIdDelete
        },
        '/api/v1/userTopicProgress/withfile': {
        },
        '/api/v1/userTopicProgress/{id}/withfile': {
        },
        '/api/v1/quiz/{id}/nextQuestion/': {
            get: quizByIdUpdate
        },
        '/api/v1/quiz/{id}/response/': {
            post: createQuiz
        },
        '/api/v1/quiz': {
            get: quizList
        },
        '/api/v1/quiz/{id}': {
            get: quizById,
            delete: quizByIdDelete
        },
        '/api/v1/quiz/withfile': {
        },
        '/api/v1/quiz/{id}/withfile': {
        },
        '/api/v1/quizQuestions': {
            post: createQuizQuestion,
            get: quizQuestionList
        },
        '/api/v1/quizQuestions/{id}': {
            get: quizQuestionById,
            put: quizQuestionByIdUpdate,
            delete: quizQuestionByIdDelete
        },
        '/api/v1/quizQuestions/withfile': {
        },
        '/api/v1/quizQuestions/{id}/withfile': {
        },
        '/api/v1/faqs': {
            post: createFaq,
            get: faqList
        },
        '/api/v1/faqs/{id}': {
            get: faqById,
            put: faqByIdUpdate,
            delete: faqByIdDelete
        },
        '/api/v1/faqs/withfile': {
        },
        '/api/v1/faqs/{id}/withfile': {
        },
        '/api/v1/faqCategories': {
            post: createFaqCategory,
            get: faqCategoryList
        },
        '/api/v1/faqCategories/{id}': {
            get: faqCategoryById,
            put: faqCategoryByIdUpdate,
            delete: faqCategoryByIdDelete
        },
        '/api/v1/faqCategories/withfile': {
        },
        '/api/v1/faqCategories/{id}/withfile': {
        },
        '/api/v1/organizations/bulkUpload': {
            post: organizationBulkUpload
        },
        '/api/v1/organizations/districts': {
            get: organizationDistricts
        },
        '/api/v1/organizations/checkOrg': {
            get: organizationCheckOrg
        },
        '/api/v1/organizations/createOrg': {
            get: organizationCreateOrg
        },
        '/api/v1/organizations': {
            post: createOrganization,
            get: organizationList
        },
        '/api/v1/organizations/{id}': {
            put: organizationUpdate,
            delete: organizationDelete
        },
        '/api/v1/organizations/withfile': {
        },
        '/api/v1/organizations/{id}/withfile': {
        },
        '/api/v1/reflectiveQuiz/{id}/nextQuestion/': {
            get: reflectiveQuizNextQuestion
        },
        '/api/v1/reflectiveQuiz/{id}/response/': {
            get: reflectiveQuizResponse
        },
        '/api/v1/reflectiveQuiz': {
            post: createReflectiveQuiz,
            get: reflectiveQuizList
        },
        '/api/v1/reflectiveQuiz/{id}': {
            get: reflectiveQuizById,
            put: reflectiveQuizByIdUpdate,
            delete: reflectiveQuizByIdDelete
        },
        '/api/v1/reflectiveQuiz/withfile': {
        },
        '/api/v1/reflectiveQuiz/{id}/withfile': {
        },
        '/api/v1/quizSurveys/{id}/nextQuestion/': {
            get: quizSurveysNextQuestion
        },
        '/api/v1/quizSurveys/{id}/response/': {
            post: quizSurveysResponse
        },
        '/api/v1/quizSurveys/{id}/responses/': {
            post: quizSurveysResponses
        },
        '/api/v1/quizSurveys/:quiz_survey_id/surveyStatus': {
            get: quizSurveySurveyStatus
        },
        '/api/v1/quizSurveys': {
            post: createQuizSurveys,
            get: quizSurveysList
        },
        '/api/v1/quizSurveys/{id}': {
            get: quizSurveysById,
            put: quizSurveysByIdUpdate,
            delete: quizSurveysByIdDelete
        },
        '/api/v1/quizSurveys/withfile': {
        },
        '/api/v1/quizSurveys/{id}/withfile': {
        },
        '/api/v1/mentorCourses/test': {
        },
        '/api/v1/mentorCourses': {
            post: createMentorCourses,
            get: mentorCoursesList
        },
        '/api/v1/mentorCourses/{id}': {
            get: mentorCoursesById,
            put: mentorCoursesByIdUpdate,
            delete: mentorCoursesByIdDelete
        },
        '/api/v1/mentorCourses/withfile': {
        },
        '/api/v1/mentorCourses/{id}/withfile': {
        },
        '/api/v1/mentorAttachments': {
            post: createMentorAttachments,
            get: mentorAttachmentsList
        },
        '/api/v1/mentorAttachments/{id}': {
            get: mentorAttachmentsById,
            put: mentorAttachmentsByIdUpdate,
            delete: mentorAttachmentsByIdDelete
        },
        '/api/v1/mentorAttachments/withfile': {
        },
        '/api/v1/mentorAttachments/{id}/withfile': {
        },
        '/api/v1/mentorTopicProgress': {
            post: createMentorTopicProgress,
            get: mentorTopicProgressList
        },
        '/api/v1/mentorTopicProgress/{id}': {
            get: mentorTopicProgressById,
            put: mentorTopicProgressByIdUpdate,
            delete: mentorTopicProgressByIdDelete
        },
        '/api/v1/mentorTopicProgress/withfile': {
        },
        '/api/v1/mentorTopicProgress/{id}/withfile': {
        },
        '/api/v1/supportTickets': {
            post: createSupportTickets,
            get: supportTicketsList
        },
        '/api/v1/supportTickets/{id}': {
            get: supportTicketsById,
            put: supportTicketsByIdUpdate,
            delete: supportTicketsByIdDelete
        },
        '/api/v1/supportTickets/withfile': {
        },
        '/api/v1/supportTickets/{id}/withfile': {
        },
        '/api/v1/supportTicketsReply': {
            post: createSupportTicketsReplies,
            get: supportTicketsRepliesList
        },
        '/api/v1/supportTicketsReply/{id}': {
            get: supportTicketsRepliesById,
            put: supportTicketsByIdUpdate,
            delete: supportTicketsByIdDelete
        },
        '/api/v1/supportTicketsReply/withfile': {
        },
        '/api/v1/supportTicketsReply/{id}/withfile': {
        },
        '/api/v1/challenge': {
            post: createChallenge,
            ge: challengeList
        },
        '/api/v1/challenge/{id}': {
            get: challengeById,
            put: challengeByIdUpdate,
            delete: challengeByIdDelete
        },
        '/api/v1/challenge/withfile': {
        },
        '/api/v1/challenge/{id}/withfile': {
        },
        '/api/v1/challenge_response/{id}/initiate/': {
            post: challengeInitiate
        },
        '/api/v1/challenge_response/fileUpload': {
            post: challengeFileUpload
        },
        '/api/v1/challenge_response/submittedDetails': {
            post: challengeSubmittedDetails
        },
        '/api/v1/challenge_response/updateSubmission': {
            put: challengeUpdateSubmission
        },
        '/api/v1/challenge_response/fetchRandomChallenge': {
            get: challengeFetchRandom
        },
        '/api/v1/challenge_response/updateEntry/{id}': {
            get: challengeUpdateEntry
        },
        '/api/v1/challenge_response/clearResponse': {
            get: challengeClearResponse
        },
        '/api/v1/challenge_response/evaluated/{evaluator_id}': {
            get: challengeEvaluated
        },
        '/api/v1/challenge_response/customFilter/': {
            get: challengeCustomFilter
        },
        '/api/v1/challenge_response/districtWiseRating/': {
            get: challengeDistrictWiseRating
        },
        '/api/v1/challenge_response/evaluationResult/': {
            get: challengeEvaluationResult
        },
        '/api/v1/challenge_response/finalEvaluation/': {
            get: challengeFinalEvaluation
        },
        '/api/v1/challenge_response': {
            post: createChallengeResponse,
            get: challengeResponseList
        },
        '/api/v1/challenge_response/{id}': {
            get: challengeResponseById,
            put: challengeResponseByIdUpdate,
            delete: challengeResponseByIdDelete
        },
        '/api/v1/challenge_response/withfile': {
        },
        '/api/v1/challenge_response/{id}/withfile': {
        },
        '/api/v1/dashboard/refreshMapStatsLive': {
            get: refreshMapStatsLive
        },
        '/api/v1/dashboard/mapStats': {
            get: mapStats
        },
        '/api/v1/dashboard/refreshMapStats': {
            get: refreshMapStats
        },
        '/api/v1/dashboard/mentorStats/{mentor_user_id}': {
            get: mentorStats
        },
        '/api/v1/dashboard/studentStats/{student_user_id}': {
            get: studentStats
        },
        '/api/v1/dashboard/studentStats/{student_user_id}/challenges': {
            get: studentStatsChallenges
        },
        '/api/v1/dashboard/studentStats/{student_user_id}/teamProgress': {
            get: studentStatsTeamProgress
        },
        '/api/v1/dashboard/teamStats/{team_id}': {
            get: teamStats
        },
        '/api/v1/dashboard/evaluatorStats': {
            get: evaluatorStats
        },
        '/api/v1/dashboard': {
            post: createDashboard,
            get: dashboardList
        },
        '/api/v1/dashboard/{id}': {
            get: dashboardById,
            put: dashboardByIdUpdate,
            delete: dashboardByIdDelete
        },
        '/api/v1/dashboard/withfile': {
        },
        '/api/v1/dashboard/{id}/withfile': {
        },
        '/api/v1/translations/refresh': {
            get: translationsRefresh
        },
        '/api/v1/translations/key': {
            get: translationsKey
        },
        '/api/v1/translations/translate-refresh': {
            post: translationsTranslateRefresh
        },
        '/api/v1/translations': {
            post: createTranslations,
            get: translationsList
        },
        '/api/v1/translations/{id}': {
            get: translationsById,
            put: translationsByIdUpdate,
            delete: translationsByIdDelete
        },
        '/api/v1/translations/withfile': {
        },
        '/api/v1/translations/{id}/withfile': {
        },
        '/api/v1/badges': {
            post: createBadges,
            get: badgesList
        },
        '/api/v1/badges/{id}': {
            get: badgesById,
            put: badgesByIdUpdate,
            delete: badgesByIdDelete
        },
        '/api/v1/badges/withfile': {
        },
        '/api/v1/badges/{id}/withfile': {
        },
        '/api/v1/tutorialVideos': {
            post: createTutorialVideos,
            get: tutorialVideosList
        },
        '/api/v1/tutorialVideos/{id}': {
            get: tutorialVideosById,
            put: tutorialVideosByIdUpdate,
            delete: tutorialVideosByIdDelete
        },
        '/api/v1/tutorialVideos/withfile': {
        },
        '/api/v1/tutorialVideos/{id}/withfile': {
        },
        '/api/v1/reports/allMentorReports': {
            get: allMentorReports
        },
        '/api/v1/reports/mentorRegList': {
            get: mentorRegList
        },
        '/api/v1/reports/preSurvey': {
            get: preSurvey
        },
        '/api/v1/reports/courseComplete': {
            get: courseComplete
        },
        '/api/v1/reports/courseInComplete': {
            get: courseInComplete
        },
        '/api/v1/reports/notRegistered': {
            get: notRegistered
        },
        '/api/v1/reports/notRegister': {
            get: notRegister
        },
        '/api/v1/reports/userTopicProgress': {
            get: userTopicProgress
        },
        '/api/v1/reports/mentorTeamsStudents': {
            get: mentorTeamsStudents
        },
        '/api/v1/reports/challengesCount': {
            get: challengesCount
        },
        '/api/v1/reports/challengesDistrictCount': {
            get: challengesDistrictCount
        },
        '/api/v1/certificate/mobileCheck': {
            get: mobileCheck
            
        },
        '/api/v1/certificate': {
            post: createCertificate,
            get: CertificateList
        },
        '/api/v1/certificate/{id}': {
            get: CertificateById,
            put: CertificateByIdUpdate,
            delete: CertificateByIdDelete
        },
        '/api/v1/certificate/withfile': {
        },
        '/api/v1/certificate/{id}/withfile': {
        },
        '/api/v1/evaluatorRating': {
            post: createEvaluaterRating,
            get: evaluaterRatingList
        },
        '/api/v1/evaluatorRating/{id}': {
            get: evaluaterRatingById,
            put: evaluaterRatingByIdUpdate,
            delete: evaluaterRatingByIdDelete
        },
        '/api/v1/evaluatorRating/withfile': {
        },
        '/api/v1/evaluatorRating/{id}/withfile': {
        },
        '/api/v1/instructions': {
            post: createInstruction,
            get: InstructionList
        },
        '/api/v1/instructions/{id}': {
            get: InstructionById,
            put: InstructionByIdUpdate,
            delete: InstructionByIdDelete
        },
        '/api/v1/instructions/withfile': {
        },
        '/api/v1/instructions/{id}/withfile': {
        },
        '/api/v1/evaluationProcess': {
            post: createEvaluationProcess,
            get: evaluationProcessList
        },
        '/api/v1/evaluationProcess/{id}': {
            get: evaluationProcessById,
            put: evaluationProcessByIdUpdate,
            delete: evaluationProcessByIdDelete
        },
        '/api/v1/evaluationProcess/withfile': {
        },
        '/api/v1/evaluationProcess/{id}/withfile': {
        },
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
        // schemas: {
        //     registrationRequestBody,
        //     loginRequestBody,
        //     changePasswordRequestBody,
        //     dynamicSignupFormRequestBody,
        //     crudRequestBody,
        //     crudRequestBodyWithFile,
        //     crudUpdatesRequestBodyWithFile,
        //     createCourseRequestBody,
        //     courseUpdatesRequestBody,
        //     createCourseTopicRequestBody,
        //     courseTopicUpdatesRequestBody,
        //     courseTopicProgressRequestBody,
        //     createModuleRequestBody,
        //     moduleUpdatesRequestBody,
        //     createWorksheetRequestBody,
        //     worksheetUpdatesRequestBody,
        //     createVideosRequestBody,
        //     videosUpdatesRequestBody,
        //     createTeamRequestBody,
        //     teamUpdatesRequestBody,
        //     notificationsWithPosterRequestBody,
        //     notificationsRequestBody,
        //     organizationRequestBody,
        //     organizationRequestBodyWithFile,
        //     organizationUpdatesRequestBody
        // },
    },
};

export { options };
