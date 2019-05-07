// eslint-disable
// this is an auto generated file. This will be overwritten

export const getWorkout = `query GetWorkout($id: ID!) {
  getWorkout(id: $id) {
    programName
    id
    goal
    description
    trainingdays {
      items {
        id
        order
        title
        done
        next
        description
        notes
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const listWorkouts = `query ListWorkouts(
  $filter: ModelWorkoutFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      programName
      id
      goal
      description
      trainingdays {
        nextToken
      }
      createdAt
    }
    nextToken
  }
}
`;
export const getTraining = `query GetTraining($id: ID!) {
  getTraining(id: $id) {
    workout {
      programName
      id
      goal
      description
      trainingdays {
        nextToken
      }
      createdAt
    }
    id
    order
    title
    done
    next
    description
    notes
    excercises {
      items {
        id
        excerciseName
        weights
        sets
        reps
        notes
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const listTrainings = `query ListTrainings(
  $filter: ModelTrainingFilterInput
  $limit: Int
  $nextToken: String
) {
  listTrainings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      workout {
        programName
        id
        goal
        description
        createdAt
      }
      id
      order
      title
      done
      next
      description
      notes
      excercises {
        nextToken
      }
      createdAt
    }
    nextToken
  }
}
`;
export const getExcercise = `query GetExcercise($id: ID!) {
  getExcercise(id: $id) {
    trainingday {
      workout {
        programName
        id
        goal
        description
        createdAt
      }
      id
      order
      title
      done
      next
      description
      notes
      excercises {
        nextToken
      }
      createdAt
    }
    id
    excerciseName
    weights
    sets
    reps
    notes
    createdAt
  }
}
`;
export const listExcercises = `query ListExcercises(
  $filter: ModelExcerciseFilterInput
  $limit: Int
  $nextToken: String
) {
  listExcercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      trainingday {
        id
        order
        title
        done
        next
        description
        notes
        createdAt
      }
      id
      excerciseName
      weights
      sets
      reps
      notes
      createdAt
    }
    nextToken
  }
}
`;
