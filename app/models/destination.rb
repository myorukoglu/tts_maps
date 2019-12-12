class Destination < ApplicationRecord
  geocoded_by :address
  
  validates :city, presence: true
  validates :country, presence: true

  after_validation :geocode

  def address
    "#{city}, #{country}"
  end
end
