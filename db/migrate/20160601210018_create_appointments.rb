class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|

      t.datetime :time, null: false
      t.string :location, null: false
      t.references :job, index: true, foreign_key: true

      t.timestamps null: false
    end

  end
end
