class AppointmentsController < ApplicationController
  def index
  end

  def create
    @job = Job.find(params[:job_id])
    @appointment = @job.appointments.create(appointment_params)
    @appointment.user_id = current_user.id
    if @appointment.save
      render json: @appointment
    end
  end

  def show
  end

  def update
  end

  def delete
  end

  def upriority
    @job = Job.find(params[:job_id])
    @appointment = @job.appointments.find(params[:id])
    @appointment.increment!(:upvotes)

    render json: @appointment
  end

  private
  def appointment_params
    params.require(:appointment).permit(:time, :location)
  end
end
