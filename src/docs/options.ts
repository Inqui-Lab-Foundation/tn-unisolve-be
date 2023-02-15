import { assets, healthCheck, home } from "./assets.api.docs";
import { version } from '../../package.json';
import { courseList, createCourse, courseById, courseByIdUpdate, courseByIdDelete, createCourseRequestBody, courseUpdatesRequestBody } from "./course.api.docs";
import { courseTopicList, createCourseTopic, courseTopicById, courseTopicByIdUpdate, courseTopicByIdDelete, courseTopicProgress, courseTopicProgressRequestBody, createCourseTopicRequestBody, courseTopicUpdatesRequestBody } from "./courseTopic.api.docs";
import { moduleList, createModule, moduleById, moduleByIdUpdate, moduleByIdDelete, createModuleRequestBody, moduleUpdatesRequestBody } from "./module.api.docs";
import { videosList, createVideos, videosById, videosByIdUpdate, videosByIdDelete, createVideosRequestBody, videosUpdatesRequestBody } from "./video.api.docs";
import { create_dynamicSignupForm, get_dynamicSignupForm } from "./auth.api.docs";
import { createTeam, teamByIdDelete, teamsById, teamsByIdUpdate, teamsList, createTeamRequestBody, teamUpdatesRequestBody } from "./team.api.docs";
import { notificationsTome, notificationWithPoster, notification, notificationsWithPosterRequestBody, notificationsRequestBody } from "./notification.api.docs";
import { createWorksheetRequestBody, worksheetUpdatesRequestBody, createWorksheet, worksheetById, worksheetByIdUpdate, worksheetList, WorksheetsByIdDelete } from "./worksheets.api.docs";
import { organizationList, createOrganization, organizationSingle, organizationDelete, organizationUpdate, createOrganizationWithFile, organizationRequestBody, organizationRequestBodyWithFile, organizationUpdatesRequestBody } from "./organization.api.docs";
import { adminId, admins, changePassword, login, logout, registration } from "./admin.api.docs";
import { userSchema } from "../validations/user.validations";
import { addBadges, addStudent, bulkCreateStudent, getBadges, studentCertificate, studentChangePassword, studentId, studentLogin, studentLogout, studentRegister, studentResetPassword, students } from "./student.api.docs";
import { user, users } from "./users.api.docs";
import { badge } from "../models/badge.model";
import { mentorChangePassword, mentorLogin, mentorRegister, mentorResetPassword, mentors, mentorUpdateMobile, mentorUpdatePassword, mentorValidateOtp, mentorVerifyUser, mentorBulkUpload, mentorId } from "./mentor.api.docs";
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
import { CertificateById, CertificateByIdDelete, CertificateByIdUpdate, CertificateList, createCertificate } from "./certificatesDownload.api.docs";
import { challengeById, challengeByIdDelete, challengeByIdUpdate, challengeList, createChallenge } from "./challenge.api.docs";
import { createTranslations, translationsById, translationsByIdDelete, translationsByIdUpdate, translationsList } from "./translations.api.docs";
import { badgesById, badgesByIdDelete, badgesByIdUpdate, badgesList, createBadges } from "./badges.api.docs";
import { createTutorialVideos, tutorialVideosById, tutorialVideosByIdDelete, tutorialVideosByIdUpdate, tutorialVideosList } from "./tutorialVideos.api.docs";
import { createSupportTickets, supportTicketsById, supportTicketsByIdDelete, supportTicketsByIdUpdate, supportTicketsList } from "./supportTickets.api.docs";
import { createMentorAttachments, mentorAttachmentsById, mentorAttachmentsByIdDelete, mentorAttachmentsByIdUpdate, mentorAttachmentsList } from "./mentorAttachments.api.docs";
import { createMentorCourses, mentorCoursesById, mentorCoursesByIdDelete, mentorCoursesByIdUpdate, mentorCoursesList } from "./mentorCourse.api.docs";

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
        },
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
        '/api/v1/students/:id/withfile': {
        },
        '/api/v1/users/updateMentorDetails': {

        },
        '/api/v1/users': {
            get: user
        },
        '/api/v1/users/{id}': {
            get: users
        },
        '/api/v1/users/withfile': {
        },
        '/api/v1/users/:id/withfile': {
        },
        '/api/v1/notifications/tome': {
            get: notificationsTome
        },
        '/api/v1/notifications/all': {
        },
        '/api/v1/notifications/send': {
            post: notification
        },
        '/api/v1/notifications/sendwithposter': {
            post: notificationWithPoster
        },
        '/api/v1/notifications/read/:id': {
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
        '/api/v1/courses/:id/withfile': {
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
        '/api/v1/courseModules/:id/withfile': {
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
        '/api/v1/videos/:id/withfile': {
        },
        '/api/v1/teams/:id/members': {
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
        '/api/v1/teams/:id/withfile': {
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
        '/api/v1/courseTopics/:id/withfile': {
        },
        '/api/v1/worksheets/:id/response': {
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
        '/api/v1/worksheets/:id/withfile': {
        },
        '/api/v1/userTopicProgress': {
        },
        '/api/v1/userTopicProgress/:id': {
        },
        '/api/v1/userTopicProgress/withfile': {
        },
        '/api/v1/userTopicProgress/:id/withfile': {
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
        '/api/v1/quiz/:id/withfile': {
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
        '/api/v1/quizQuestions/:id/withfile': {
        },
        '/api/v1/faqs': {
            post: createFaq,
            get: faqList
        },
        '/api/v1/faqs/:id': {
            get: faqById,
            put: faqByIdUpdate,
            delete: faqByIdDelete
        },
        '/api/v1/faqs/withfile': {
        },
        '/api/v1/faqs/:id/withfile': {
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
        '/api/v1/faqCategories/:id/withfile': {
        },
        '/api/v1/organizations/bulkUpload': {
        },
        '/api/v1/organizations/districts': {
        },
        '/api/v1/organizations/checkOrg': {
        },
        '/api/v1/organizations/createOrg': {
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
        '/api/v1/organizations/:id/withfile': {
        },
        '/api/v1/reflectiveQuiz/:id/nextQuestion/': {
        },
        '/api/v1/reflectiveQuiz/:id/response/': {
        },
        '/api/v1/reflectiveQuiz': {
        },
        '/api/v1/reflectiveQuiz/:id': {
        },
        '/api/v1/reflectiveQuiz/withfile': {
        },
        '/api/v1/reflectiveQuiz/:id/withfile': {
        },
        '/api/v1/quizSurveys/:id/nextQuestion/': {
        },
        '/api/v1/quizSurveys/:id/response/': {
        },
        '/api/v1/quizSurveys/:id/responses/': {
        },
        '/api/v1/quizSurveys/:quiz_survey_id/surveyStatus': {
        },
        '/api/v1/quizSurveys': {
        },
        '/api/v1/quizSurveys/:id': {
        },
        '/api/v1/quizSurveys/withfile': {
        },
        '/api/v1/quizSurveys/:id/withfile': {
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
        '/api/v1/mentorCourses/:id/withfile': {
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
        '/api/v1/mentorAttachments/:id/withfile': {
        },
        '/api/v1/mentorTopicProgress': {
        },
        '/api/v1/mentorTopicProgress/:id': {
        },
        '/api/v1/mentorTopicProgress/withfile': {
        },
        '/api/v1/mentorTopicProgress/:id/withfile': {
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
        '/api/v1/supportTickets/:id/withfile': {
        },
        '/api/v1/supportTicketsReply': {
        },
        '/api/v1/supportTicketsReply/:id': {
        },
        '/api/v1/supportTicketsReply/withfile': {
        },
        '/api/v1/supportTicketsReply/:id/withfile': {
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
        '/api/v1/challenge/:id/withfile': {
        },
        '/api/v1/challenge_response/:id/initiate/': {
        },
        '/api/v1/challenge_response/fileUpload': {
        },
        '/api/v1/challenge_response/submittedDetails': {
        },
        '/api/v1/challenge_response/updateSubmission': {
        },
        '/api/v1/challenge_response/fetchRandomChallenge': {
        },
        '/api/v1/challenge_response/updateEntry/:id': {
        },
        '/api/v1/challenge_response/clearResponse': {
        },
        '/api/v1/challenge_response/evaluated/:evaluator_id': {
        },
        '/api/v1/challenge_response/customFilter/': {
        },
        '/api/v1/challenge_response/districtWiseRating/': {
        },
        '/api/v1/challenge_response/evaluationResult/': {
        },
        '/api/v1/challenge_response/finalEvaluation/': {
        },
        '/api/v1/challenge_response': {
        },
        '/api/v1/challenge_response/:id': {
        },
        '/api/v1/challenge_response/withfile': {
        },
        '/api/v1/challenge_response/:id/withfile': {
        },
        '/api/v1/dashboard/refreshMapStatsLive': {
        },
        '/api/v1/dashboard/mapStats': {
        },
        '/api/v1/dashboard/refreshMapStats': {
        },
        '/api/v1/dashboard/mentorStats/:mentor_user_id': {
        },
        '/api/v1/dashboard/studentStats/:student_user_id': {
        },
        '/api/v1/dashboard/studentStats/:student_user_id/challenges': {
        },
        '/api/v1/dashboard/studentStats/:student_user_id/teamProgress': {
        },
        '/api/v1/dashboard/teamStats/:team_id': {
        },
        '/api/v1/dashboard/evaluatorStats': {
        },
        '/api/v1/dashboard': {
        },
        '/api/v1/dashboard/:id': {
        },
        '/api/v1/dashboard/withfile': {
        },
        '/api/v1/dashboard/:id/withfile': {
        },
        '/api/v1/translations/refresh': {
        },
        '/api/v1/translations/key': {
        },
        '/api/v1/translations/translate-refresh': {
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
        '/api/v1/translations/:id/withfile': {
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
        '/api/v1/badges/:id/withfile': {
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
        '/api/v1/tutorialVideos/:id/withfile': {
        },
        '/api/v1/reports/allMentorReports': {
        },
        '/api/v1/reports/mentorRegList': {
        },
        '/api/v1/reports/preSurvey': {
        },
        '/api/v1/reports/courseComplete': {
        },
        '/api/v1/reports/courseInComplete': {
        },
        '/api/v1/reports/notRegistered': {
        },
        '/api/v1/reports/notRegister': {
        },
        '/api/v1/reports/userTopicProgress': {
        },
        '/api/v1/reports/mentorTeamsStudents': {
        },
        '/api/v1/reports/challengesCount': {
        },
        '/api/v1/reports/challengesDistrictCount': {
        },
        '/api/v1/certificate/mobileCheck': {
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
        '/api/v1/certificate/:id/withfile': {
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
        '/api/v1/evaluatorRating/:id/withfile': {
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
        '/api/v1/instructions/:id/withfile': {
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
        '/api/v1/evaluationProcess/:id/withfile': {
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
