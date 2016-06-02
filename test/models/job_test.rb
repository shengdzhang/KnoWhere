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

require 'test_helper'

class JobTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
