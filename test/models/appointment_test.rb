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

require 'test_helper'

class AppointmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
