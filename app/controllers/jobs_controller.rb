class JobsController < ApplicationController
  
  def index
    @jobs = Job.all
    render json: @jobs
  end

  def create
    @job = Job.new(job_params)
    @job.user_id = current_user.id
    if @job.save
      render json: @job
    end
  end

  def show
    @job = Job.find(params[:id])
    render json: @job
  end

  def update

  end

  def upriority
    @job = Job.find(params[:id])
    @job.increment!(:priority)

    render json: @job
  end

  def delete
  end

  private

  def job_params
    params.require(:job).permit(:title, :location, :company, :found)
  end
end
