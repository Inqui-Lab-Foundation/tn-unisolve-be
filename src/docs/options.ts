import { assets, healthCheck, home } from "./assets.api.docs";
import { version } from '../../package.json';
import {
    courseList,
    createCourse,
    courseById,
    courseByIdUpdate,
    courseByIdDelete,
    createCourseRequestBody,
    courseUpdatesRequestBody
} from "./course.api.docs";
import {
    courseTopicList,
    createCourseTopic,
    courseTopicById,
    courseTopicByIdUpdate,
    courseTopicByIdDelete,
    courseTopicProgress,
    courseTopicProgressRequestBody,
    createCourseTopicRequestBody,
    courseTopicUpdatesRequestBody
} from "./courseTopic.api.docs";
import {
    moduleList,
    createModule,
    moduleById,
    moduleByIdUpdate,
    moduleByIdDelete,
    createModuleRequestBody,
    moduleUpdatesRequestBody
} from "./module.api.docs";
import {
    videosList,
    createVideos,
    videosById,
    videosByIdUpdate,
    videosByIdDelete,
    createVideosRequestBody,
    videosUpdatesRequestBody,
} from "./video.api.docs";
import {
    create_dynamicSignupForm,
    get_dynamicSignupForm,
} from "./auth.api.docs";
import {
    createCrud, createCrudWithFile, crudDelete, crudList, crudUpdate, crudUpdateWithFile, crudRequestBodyWithFile, crudRequestBody,
    crudUpdatesRequestBodyWithFile,
    crudSingle,
} from "./crud.api.docs";
import { createTeam, teamByIdDelete, teamsById, teamsByIdUpdate, teamsList, createTeamRequestBody, teamUpdatesRequestBody } from "./team.api.docs";
import { notificationsTome, notificationWithPoster, notification, notificationsWithPosterRequestBody, notificationsRequestBody } from "./notification.api.docs";
import {
    createWorksheetRequestBody,
    worksheetUpdatesRequestBody, createWorksheet, worksheetById, worksheetByIdUpdate, worksheetList, WorksheetsByIdDelete
} from "./worksheets.api.docs";
import { organizationList, createOrganization, organizationSingle, organizationDelete, organizationUpdate, createOrganizationWithFile, organizationRequestBody, organizationRequestBodyWithFile, organizationUpdatesRequestBody } from "./organization.api.docs";
import { admin, admins, changePassword, login, logout, registration } from "./admin.api.docs";

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
            name: 'Quiz questions',
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
            get: admin
        },
        '/api/v1/evaluators/register': {
        },
        '/api/v1/evaluators/login': {
        },
        '/api/v1/evaluators/logout': {
        },
        '/api/v1/evaluators/changePassword': {
        },
        '/api/v1/evaluators': {
        },
        '/evaluators/bulkUpload': {
        },
        '/api/v1/mentors/register': {
        },
        '/api/v1/mentors/validateOtp': {
        },
        '/api/v1/mentors/login': {
        },
        '/api/v1/mentors/changePassword': {
        },
        '/api/v1/mentors/updatePassword': {
        },
        '/api/v1/mentors/verifyUser': {
        },
        '/api/v1/mentors/updateMobile': {
        },
        '/api/v1/mentors/:mentor_user_id/deleteAllData': {
        },
        '/api/v1/mentors/resetPassword': {
        },
        '/api/v1/mentors/manualResetPassword': {
        },
        '/api/v1/mentors/regStatus': {
        },
        '/api/v1/mentors/bulkUpload': {
        },
        '/api/v1/mentors': {
        },
        '/api/v1/mentors/:id': {
        },
        '/api/v1/students/register': {
        },
        '/api/v1/students/addStudent': {
        },
        '/api/v1/students/bulkCreateStudent': {
        },
        '/api/v1/students/login': {
        },
        '/api/v1/students/logout': {
        },
        '/api/v1/students/changePassword': {
        },
        '/api/v1/students/resetPassword': {
        },
        '/api/v1/students/:student_user_id/studentCertificate': {
        },
        '/api/v1/students/:student_user_id/badges': {
        },
        '/api/v1/students/passwordUpdate': {
        },
        '/api/v1/students': {
        },
        '/api/v1/students/:id': {
        },
        '/api/v1/students/withfile': {
        },
        '/api/v1/students/:id/withfile': {
        },
        '/api/v1/users/updateMentorDetails': {
        },
        '/api/v1/users': {
        },
        '/api/v1/users/:id': {
        },
        '/api/v1/users/withfile': {
        },
        '/api/v1/users/:id/withfile': {
        },
        '/api/v1/notifications/tome': {
        },
        '/api/v1/notifications/all': {
        },
        '/api/v1/notifications/send': {
        },
        '/api/v1/notifications/sendwithposter': {
        },
        '/api/v1/notifications/read/:id': {
        },
        '/api/v1/courses/test': {
        },
        '/api/v1/courses': {
        },
        '/api/v1/courses/:id': {
        },
        '/api/v1/courses/withfile': {
        },
        '/api/v1/courses/:id/withfile': {
        },
        '/api/v1/courseModules': {
        },
        '/api/v1/courseModules/:id': {
        },
        '/api/v1/courseModules/withfile': {
        },
        '/api/v1/courseModules/:id/withfile': {
        },
        '/api/v1/videos': {
        },
        '/api/v1/videos/:id': {
        },
        '/api/v1/videos/withfile': {
        },
        '/api/v1/videos/:id/withfile': {
        },
        '/api/v1/teams/:id/members': {
        },
        '/api/v1/teams': {
        },
        '/api/v1/teams/:id': {
        },
        '/api/v1/teams/withfile': {
        },
        '/api/v1/teams/:id/withfile': {
        },
        '/api/v1/courseTopics': {
        },
        '/api/v1/courseTopics/:id': {
        },
        '/api/v1/courseTopics/withfile': {
        },
        '/api/v1/courseTopics/:id/withfile': {
        },
        '/api/v1/worksheets/:id/response': {
        },
        '/api/v1/worksheets': {
        },
        '/api/v1/worksheets/:id': {
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
        '/api/v1/quiz/:id/nextQuestion/': {
        },
        '/api/v1/quiz/:id/response/': {
        },
        '/api/v1/quiz': {
        },
        '/api/v1/quiz/:id': {
        },
        '/api/v1/quiz/withfile': {
        },
        '/api/v1/quiz/:id/withfile': {
        },
        '/api/v1/faqCategories': {
        },
        '/api/v1/faqCategories/:id': {
        },
        '/api/v1/faqCategories/withfile': {
        },
        '/api/v1/faqCategories/:id/withfile': {
        },
        '/api/v1/faqs': {
        },
        '/api/v1/faqs/:id': {
        },
        '/api/v1/faqs/withfile': {
        },
        '/api/v1/faqs/:id/withfile': {
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
        },
        '/api/v1/organizations/:id': {
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
        },
        '/api/v1/mentorCourses/:id': {
        },
        '/api/v1/mentorCourses/withfile': {
        },
        '/api/v1/mentorCourses/:id/withfile': {
        },
        '/api/v1/mentorAttachments': {
        },
        '/api/v1/mentorAttachments/:id': {
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
        },
        '/api/v1/supportTickets/:id': {
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
        '/api/v1/quizQuestions': {
        },
        '/api/v1/quizQuestions/:id': {
        },
        '/api/v1/quizQuestions/withfile': {
        },
        '/api/v1/quizQuestions/:id/withfile': {
        },
        '/api/v1/challenge': {
        },
        '/api/v1/challenge/:id': {
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
        },
        '/api/v1/translations/:id': {
        },
        '/api/v1/translations/withfile': {
        },
        '/api/v1/translations/:id/withfile': {
        },
        '/api/v1/badges': {
        },
        '/api/v1/badges/:id': {
        },
        '/api/v1/badges/withfile': {
        },
        '/api/v1/badges/:id/withfile': {
        },
        '/api/v1/tutorialVideos': {
        },
        '/api/v1/tutorialVideos/:id': {
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
        },
        '/api/v1/certificate/:id': {
        },
        '/api/v1/certificate/withfile': {
        },
        '/api/v1/certificate/:id/withfile': {
        },
        '/api/v1/evaluatorRating': {
        },
        '/api/v1/evaluatorRating/:id': {
        },
        '/api/v1/evaluatorRating/withfile': {
        },
        '/api/v1/evaluatorRating/:id/withfile': {
        },
        '/api/v1/instructions': {
        },
        '/api/v1/instructions/:id': {
        },
        '/api/v1/instructions/withfile': {
        },
        '/api/v1/instructions/:id/withfile': {
        },
        '/api/v1/evaluationProcess': {
        },
        '/api/v1/evaluationProcess/:id': {
        },
        '/api/v1/evaluationProcess/withfile': {
        },
        '/api/v1/evaluationProcess/:id/withfile': {
        },
        '/api/v1/crud/{model_name}': {
            post: createCrud,
            get: crudList
        },
        '/api/v1/crud/{model_name}/{id}': {
            get: crudSingle,
            put: crudUpdate,
            delete: crudDelete
        },
        '/api/v1/crud/{model_name}/withfile': {
            post: createCrudWithFile,
            put: crudUpdateWithFile
        },
        //course
        // '/api/v1/courses': {
        //     post: createCourse,
        //     get: courseList
        // },
        '/api/v1/courses/{course_id}': {
            get: courseById,
            put: courseByIdUpdate,
            delete: courseByIdDelete
        },
        //course modules
        // '/api/v1/courseModules': {
        //     post: createModule,
        //     get: moduleList
        // },
        '/api/v1/courseModules/{module_id}': {
            get: moduleById,
            put: moduleByIdUpdate,
            delete: moduleByIdDelete
        },
        //videos
        '/api/v1/videos/': {
            post: createVideos,
            get: videosList
        },
        '/api/v1/videos/{video_id}': {
            get: videosById,
            put: videosByIdUpdate,
            delete: videosByIdDelete
        },
        //courseTopics
        // '/api/v1/courseTopics': {
        //     post: createCourseTopic,
        //     get: courseTopicList
        // },
        '/api/v1/courseTopics/{topic_id}': {
            get: courseTopicById,
            put: courseTopicByIdUpdate,
            delete: courseTopicByIdDelete
        },
        // '/api/v1/userTopicProgress': {
        //     post: courseTopicProgress
        // },
        // //worksheets
        // '/api/v1/worksheets': {
        //     post: createWorksheet,
        //     get: worksheetList
        // },
        '/api/v1/worksheet/{worksheet_id}': {
            get: worksheetById,
            put: worksheetByIdUpdate,
            delete: WorksheetsByIdDelete
        },
        //teams
        '/api/v1/teams/': {
            post: createTeam,
            get: teamsList
        },
        '/api/v1/teams/{team_id}': {
            get: teamsById,
            put: teamsByIdUpdate,
            delete: teamByIdDelete
        },
        //Notifications
        // '/api/v1/notifications/tome': {
        //     get: notificationsTome
        // },
        // '/api/v1/notifications/send': {
        //     post: notification
        // },
        // '/api/v1/notifications/sendwithposter': {
        //     post: notificationWithPoster
        // },
        //organization
        '/api/v1/organization/': {
            post: createOrganization,
            get: organizationList
        },
        '/api/v1/organization/{organization_id}': {
            put: organizationUpdate,
            delete: organizationDelete
        },
        '/api/v1/organization/withFile': {
            post: createOrganizationWithFile
        }
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
