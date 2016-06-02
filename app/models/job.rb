# == Schema Information
#
# Table name: jobs
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  company    :string           not null
#  location   :string           not null
#  found      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class Job < ActiveRecord::Base
  
  has_many :appointments, dependent: :destroy

  belongs_to :user

  def as_json(options = {})
   super(options.merge(include: [:user, appointments: {include: :user}]))
  end
end
