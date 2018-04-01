@invites.each do |invite|
  json.extract! invite, :username, :attending, :capacity
end
