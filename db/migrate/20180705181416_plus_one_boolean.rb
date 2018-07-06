class PlusOneBoolean < ActiveRecord::Migration[5.1]
  def change
    add_column :invites, :plus_one_bool, :boolean
  end
end
