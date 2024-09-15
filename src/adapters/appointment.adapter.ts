import { AppointmentModel } from '@/models'
import { InputAdapter, OutputAdapter } from '@/helpers'

export const myAppts: {
  output: OutputAdapter<any[], AppointmentModel.Data[]>
} = {
  output: response => {
    const convertedResource: AppointmentModel.Data[] = response.map(item => ({
      id: item.id_turn,
      idTreatment: item.id_treatment_turn,
      date: item.date_turn,
      hour: item.hour_turn,
      comments: item.comment_turn,
      state: item.estate_turn,
      createdAt: item.created_at,
    }))

    return convertedResource
  },
}

export const getBusy: {
  input: InputAdapter<AppointmentModel.BusyData, AppointmentModel.BusyBody>
  output: InputAdapter<any, AppointmentModel.BusyResponse>
} = {
  input: data => {
    const convertedResource: AppointmentModel.BusyBody = {
      date_turn: data.date,
    }
    return convertedResource
  },

  output: response => {
    const convertedResource: AppointmentModel.BusyResponse = {
      occupiedHours: response.occupied_hours,
    }

    return convertedResource
  },
}

export const create: {
  input: InputAdapter<AppointmentModel.CreateData, AppointmentModel.CreateBody>
} = {
  input: data => {
    const convertedResource: AppointmentModel.CreateBody = {
      id_treatment_turn: data.idTreatment,
      date_turn: data.date,
      hour_turn: data.hour,
      comment_turn: data.comments,
    }
    return convertedResource
  },
}
