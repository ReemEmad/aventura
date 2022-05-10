import axios from "axios"

const instance = axios.create({
  baseURL: "https://testing-api.elastic.travel/api/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWRhZGIwMzUzNDFlYTMzNzllYjMyZmUiLCJlbWFpbCI6ImNvbXBhbnl1c2VyQG1haWwuY29tIiwibmFtZSI6ImNvbXBhbnkgdXNlciIsImp0aSI6IjRiMjcyYjM1LTc1NGEtNGNjMy1hZGYwLTkwMTg3MWM3ZWRiYyIsIlVzZXJJZCI6IjYxZGFkYjAzNTM0MWVhMzM3OWViMzJmZSIsImV4cCI6MTY1MjQ1NTAyNCwiaXNzIjoiU0hFUlpBTCIsImF1ZCI6IlNIRVJaQUwifQ.RpUT9NHKSt6ZUBKAEy8aJzGjrEzPNSZ4LVrbaKb0tlo",
  },
})

export const getRegions = (compnayId, pageNumber, pageSize) => {
  let result = instance.get(
    `foundation/region?CompanyId=${compnayId}&PageNumber=${pageNumber}&PageSize=${pageSize}`,
  )
  return result
}

export const getRegion = (id) => {
  let result = instance.get(`foundation/region/${id}`)
  return result
}

export const getRegionPackages = (
  companyId,
  regionId,
  pageNumber,
  pageSize,
) => {
  let result = instance.get(
    `inventory/package?CompanyId=${companyId}&RegionId=${regionId}&pageNumber=${pageNumber}&pageSize=${pageSize}&IsWebsite=true`,
  )
  return result
}

export const getPackageDetails = (id) => {
  let result = instance.get(`inventory/package/${id}`)
  return result
}
