# == Schema Information
#
# Table name: appointments
#
#  id         :integer          not null, primary key
#  time       :datetime         not null
#  location   :string           not null
#  job_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class Appointment < ActiveRecord::Base

  belongs_to :job
  belongs_to :user

  def as_json(options = {})
    super(options.merge(include: :user))
  end

end
