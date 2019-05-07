// eslint-disable
// this is an auto generated file. This will be overwritten

export const createWorkout = `mutation CreateWorkout($input: CreateWorkoutInput!) {
  createWorkout(input: $input) {
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
export const updateWorkout = `mutation UpdateWorkout($input: UpdateWorkoutInput!) {
  updateWorkout(input: $input) {
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
export const deleteWorkout = `mutation DeleteWorkout($input: DeleteWorkoutInput!) {
  deleteWorkout(input: $input) {
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
export const createTraining = `mutation CreateTraining($input: CreateTrainingInput!) {
  createTraining(input: $input) {
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
export const updateTraining = `mutation UpdateTraining($input: UpdateTrainingInput!) {
  updateTraining(input: $input) {
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
export const deleteTraining = `mutation DeleteTraining($input: DeleteTrainingInput!) {
  deleteTraining(input: $input) {
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
export const createExcercise = `mutation CreateExcercise($input: CreateExcerciseInput!) {
  createExcercise(input: $input) {
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
export const updateExcercise = `mutation UpdateExcercise($input: UpdateExcerciseInput!) {
  updateExcercise(input: $input) {
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
export const deleteExcercise = `mutation DeleteExcercise($input: DeleteExcerciseInput!) {
  deleteExcercise(input: $input) {
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
