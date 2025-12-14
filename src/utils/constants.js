export const UserRolesEnum = {
    ADMIN: "admin",
    PROJECT_ADMIN: "project_admin",
    MEMBER: "member"
}

export const AvailableUserRole = Object.values(UserRolesEnum)

export const TaskStatusEnum = {
    todo: "todo",
    IN_PROGRESS: "in_progress",
    DONE: "done"
}

export const AvailableTasksStatuses = Object.values(TaskStatusEnum)

// ORM = Object Relational Mapping
// ODM = Object Document Mapping