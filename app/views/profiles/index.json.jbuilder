json.array!(@profiles) do |profile|
  json.extract! profile, :id, :firstname, :lastname, :bio, :dateofbirth
  json.url profile_url(profile, format: :json)
end
