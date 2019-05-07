// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateWorkout = `subscription OnCreateWorkout {
  onCreateWorkout {
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
export const onUpdateWorkout = `subscription OnUpdateWorkout {
  onUpdateWorkout {
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
export const onDeleteWorkout = `subscription OnDeleteWorkout {
  onDeleteWorkout {
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
export const onCreateTraining = `subscription OnCreateTraining {
  onCreateTraining {
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
export const onUpdateTraining = `subscription OnUpdateTraining {
  onUpdateTraining {
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
export const onDeleteTraining = `subscription OnDeleteTraining {
  onDeleteTraining {
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
export const onCreateExcercise = `subscription OnCreateExcercise {
  onCreateExcercise {
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
export const onUpdateExcercise = `subscription OnUpdateExcercise {
  onUpdateExcercise {
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
export const onDeleteExcercise = `subscription OnDeleteExcercise {
  onDeleteExcercise {
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
