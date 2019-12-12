class AddStateToDestinations < ActiveRecord::Migration[6.0]
  def change
    add_column :destinations, :state, :string
  end
end
