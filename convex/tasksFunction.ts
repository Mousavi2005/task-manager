import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

export const getAllTasks = query({
    handler: async (ctx) => {
        return await ctx.db.query('tasks').collect()
    }
})

export const createTask = mutation({
    args: { taskName: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db.insert('tasks', {
            taskName: args.taskName,
            isCompleted: false
        })
    }
})
