import { constents } from "./constents.config";

export const speeches = {
    WELCOME_MESSAGE: "Welcome to the Unisolve APIs",
    UNABLE_TO_CREATE_TOKEN: "Unable to create token",
    INVALID_DATA_SEND_TO_CREATE_TOKEN: "Invalid data send to create token",
    INVALID_TOKEN: "Invalid token! Kindly provide a valid token",
    UNAUTHORIZED_ACCESS: "Unauthorized Access! Kindly provide a valid token",
    TOKEN_EXPIRED: "Token Expired! Kindly provide a valid token",
    BAD_REQUEST: "Bad Request",
    NOT_ACCEPTABLE: "Not Acceptable",
    DATA_NOT_FOUND: "Data not found",
    UPLOAD_FAILD: "File upload failed",

    USER_NOT_FOUND: "User not found",
    USER_PASSWORD: "User password doesn't match",
    USER_PASSWORD_CHANGE: "User password updated",
    USER_RISTRICTED: "Unauthorized Access!",
    USER_DELETED: "User is ditected as deleted. Kindly contact your administrator.",
    USER_LOCKED: "User is ditected as locked. Kindly contact your administrator.",
    USER_INACTIVE: "User is ditected as inactive. Kindly contact your administrator.",
    USER_ALREADY_EXISTED: "User already existed with the Email and Phone Number.",
    USER_REGISTERED_SUCCESSFULLY: "User registered successfully",
    USER_LOGIN_SUCCESS: "Login Successful",
    LOGOUT_SUCCESS: "Logout Successful",
    USER_EMAIL_REQUIRED: "Email is required, it should not be empty.",
    USER_EMAIL_INVALID: "Email is invalid, it should be a valid email.",
    USER_PWD_REQUIRED: "Password is required, it should not be empty.",
    MOBILE_NUMBER_REQUIRED: "Mobile number is required, it should not be empty.",
    USER_QUALIFICATION_REQUIRED: "Qualification is required, it should not be empty.",
    CREATED_BY_REQUIRED: "Created_by is required, it should not be empty.",
    NAME_REQUIRED: "Name is required, it should not be empty.",
    DESCRIPTION_REQUIRED: "Description is required, it should not be empty.",
    ID_REQUIRED: "ID is required, it should not be empty.",
    TEAM_NAME_REQUIRED: "Team name is required, it should not be empty.",

    //quiz submit response keys
    QUIZ_ID_REQUIRED: "Quiz ID is required, it should not be empty.",
    QUIZ_QUESTION_ID_REQUIRED: "QUIZ QUESTION ID is required, it should not be empty.",
    QUESTION_REQUIRED: "QUESTION is required, it should not be empty.",
    SELCTED_OPTION_REQUIRED: "Selected option is required, it should not be empty.",
    CORRECT_ANSWER_REQUIRED: "Correct answer is required, it should not be empty.",
    LEVEL_REQUIRED: "Level is required, it should not be empty.",
    CATEGORY_REQUIRED: "Category is required, it should not be empty.",
    QUESTION_NO_REQUIRED: "Question no is required, it should not be empty.",

    //worksheet submit resoponse keys 
    WORKSHEET_ID_REQUIRED:"WORKSHEET ID is required, it should not be empty.",
    WORKSHEET_FILE:"WORKSHEET_FILE is required, it should not be empty.",

    NOTIFICATION_TYPE_INVALID: `Notification type is invalid, it should be one from ${Object.values(constents.notification_types.list).join(", ")}.`,
    NOTIFICATION_TYPE_REQUIRED: `Notification type is required, it should be one from ${Object.values(constents.notification_types.list).join(", ")}.`,
    NOTIFICATION_TARGET_AUDIENCE_REQUIRED: "Target audience is required, it should be either 'All' or user_id(s) with ',' seperated.",
    NOTIFICATION_TITLE_REQUIRED: "Title is required, it should not be empty.",
    NOTIFICATION_MESSAGE_REQUIRED: "Message is required, it should not be empty.",
    NOTIFICATION_STATUS_INVALID: `Status is invalid, it should be one from ${Object.values(constents.notification_status_flags.list).join(", ")}.`,
    NOTIFICATION_STATUS_REQUIRED: `Status is required, it should be one from ${Object.values(constents.notification_status_flags.list).join(", ")}.`,
    NOTIFICATION_CREATED_SUCCESSFULLY: "Notification created successfully",
    NOTIFICATION_UPDATED_SUCCESSFULLY: "Notification updated successfully",
    NOTIFICATION_DELETED_SUCCESSFULLY: "Notification deleted successfully",

    COMMON_STATUS_INVALID: `Status is invalid, it should be one from ${Object.values(constents.common_status_flags.list).join(", ")}.`,
    COMMON_STATUS_REQUIRED: `Status is required, it should be one from ${Object.values(constents.common_status_flags.list).join(", ")}.`,

    CREATED_FILE: "successfully Created",
    FILE_EMPTY: "Unable to create a file, Please check the payload",
    FETCH_FILE: "file found",

    EMAIL_SEND_ERROR: "Faild to send email",
    EMAIL_SEND_SUCCESS: "Email sent successfully.",

    FAQ_CATEGORY: "Category is required.",
    FAQ_ANSWER: "Answer is required.",
}
